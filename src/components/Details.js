import React, { useState, useEffect } from 'react'
import '../css/Details.css'
import { Link, useParams } from 'react-router-dom';
import { db } from '../firebase'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useStateValue } from '../StateProvider';
import AddProductNotification from '../components/AddProductNotification'
import { productsCount, getBasketTotal } from '../reducer'

function Details() {
    const [product, setProduct] = useState({});
    const [display, setDisplay] = useState(false);
    const [notification, setNotification] = useState({});
    const [{ basket }, dispatch] = useStateValue();
    const { title, price, image, rating } = product;
    let { id } = useParams();

    const handler = () => {
        setDisplay(true)
        setNotification(
            {
                id,
                title,
                price,
                image,
                rating,
                itemsCount: Number(document.getElementsByClassName("product__details__box__select")[0].value)
            })
    }
    const closeNotification = () => {
        setDisplay(false)
    }

    useEffect(() => {
        db.ref('/Products/' + id).once('value').then(snapshot => {
            setProduct(snapshot.val());
        });
    })

    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id,
                product: {
                    id: product.id,
                    title,
                    price,
                    image,
                    rating
                },
                count: Number(document.getElementsByClassName("product__details__box__select")[0].value)
            },
        })
        handler();
    }

    return (
        <div className='details'>
            <img src="https://images-eu.ssl-images-amazon.com/images/G/02/B2B/Merch/ILM/ILM_650x45_VAT-message-3_UK._CB456689785_.jpg"></img>
            <Link to="/" className="details__backToProducts">{"<  "}Back to products</Link>
            {display ? <AddProductNotification notification={notification} itemsCount={productsCount(basket)}
                basketTotal={getBasketTotal(basket)} closeNotification={closeNotification} /> : null}
            <div className="product__details">
                <div className="product__details__image" >
                    <img src={product.image}></img>
                </div>
                <div className="product__details__info">
                    <span>{product.title}</span>
                    <span className="product__details__info__rating">
                        {
                            Array(product.rating).fill().map((_) => (<p>⭐</p>))
                        }
                    </span>
                    <span>Price: <span className="product__details__info__price">${product.price}</span> & FREE Delivery</span>
                    <p><strong>About this item</strong></p>
                </div>
                <div className="product__details__box">
                    <span className="product__details__box__price">${product.price}</span>
                    <p className="product__details__box__delivery">Fastest delivery: <b>Tuesday, Oct 20</b></p>
                    <p className="product__details__box__inStock">In stock.</p>
                    <span>
                        <label for="quantity" className="quant">Quantity:</label>
                        <select name="quantity" className="product__details__box__select" autocomplete="off">
                            {
                                Array.from({ length: 30 }, (_, i) => i + 1).map((x) => (<option value={x}>{x}</option>))
                            }
                        </select>
                    </span>
                    <div>
                        <ShoppingCartIcon className="product__details__box__shoppingCart" />
                        <button onClick={addToBasket}>Add to Basket</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details