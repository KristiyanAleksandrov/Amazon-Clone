import React from "react"
import "../css/Product.css"
import { Link } from 'react-router-dom'
import { useStateValue } from "../StateProvider"
import { Button } from "@material-ui/core"

function Product({ id, title, price, image, rating, action }) {
    const [{ basket }, dispatch] = useStateValue();
    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id,
                product: {
                    id,
                    title,
                    price,
                    image,
                    rating
                },
                count: 1
            }
        })
        action(id, title, price, image, rating);
    }

    return (
        <div className="product" >
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {
                        Array(rating).fill().map((_) => (<p>⭐</p>))
                    }
                </div>
            </div>
            <Link to={`/details/${id}`}>
                <img className="product__image" src={image} />
            </Link>
            <Button onClick={addToBasket}>Add to Basket</Button>
        </div>
    )
}

export default Product