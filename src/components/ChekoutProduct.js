import React from 'react'
import { Link } from 'react-router-dom'
import '../css/CheckoutProduct.css'
import { useStateValue } from '../StateProvider';

function CheckoutProduct({ product, count }) {
    const [{basket}, dispatch] = useStateValue();

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
                <p>Qty: {count}</p>
                <button onClick={removeFromBasket}>Remove from Basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct;