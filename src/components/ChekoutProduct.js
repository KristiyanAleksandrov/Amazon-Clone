import React from 'react'
import { Link } from 'react-router-dom'
import '../css/CheckoutProduct.css'
import { useStateValue } from '../StateProvider';

function CheckoutProduct({ product, count }) {
    const [{ basket }, dispatch] = useStateValue();

    const changeProductCount = () => {
        dispatch({
            type: 'CHANGE_PRODUCT_COUNT',
            id: product.id,
            count: Number(document.getElementsByClassName("product__details__box__select")[0].value)
        })
    }

    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: product.id
        }
        )
    }

    return (
        <div className="checkoutProduct">
            <Link to={`/details/${product.id}`}>
                <img className="checkoutProduct__image" src={product.image} />
            </Link>
            <div className="checkoutProduct__info">
                <span className="checkoutProduct__title">{product.title}</span>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{product.price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {
                        Array(product.rating).fill().map((_) => (<p>⭐</p>))
                    }
                </div>
                <p>
                    <label for="quantity" className="quant">Qty:</label>
                    <select onChange={changeProductCount} name="quantity" className="product__details__box__select" autocomplete="off">
                        {
                            Array.from({ length: 30 }, (_, i) => i + 1).map((x) => {
                                if (x === count) {
                                    return <option selected={true} value={x}>{x}</option>
                                }
                                return <option value={x}>{x}</option>
                            })
                        }
                    </select>
                </p>
                <button onClick={removeFromBasket}>Remove from Basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct;