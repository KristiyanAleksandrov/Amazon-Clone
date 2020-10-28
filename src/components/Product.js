import React from "react"
import "../css/Product.css"
import { Link } from 'react-router-dom'
import { useStateValue } from "../StateProvider"
import { Button } from "@material-ui/core"

function Product({ id, title, price, image, rating, action }) {
    const[{ basket }, dispatch] = useStateValue();
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
            {/* {notification()} */}
        </div>
    )
}

export default Product

// class Product extends React.Component {// ({ id, title, price, image, rating }) {
//     constructor(props) {
//         super(props);
//     }
//     render() {
//         let { id, title, price, image, rating } = this.props;

//         // const addToBasket = () => {
//         //     const[{ basket }, dispatch] = useStateValue();
//         //     dispatch({
//         //         type: 'ADD_TO_BASKET',
//         //         item: {
//         //             id,
//         //             product: {
//         //                 id,
//         //                 title,
//         //                 price,
//         //                 image,
//         //                 rating
//         //             },
//         //             count: 1
//         //         }
//         //     }
//         //     )
//         // }
//         return (
//             <div className="product" >
//                 <div className="product__info">
//                     <p>{title}</p>
//                     <p className="product__price">
//                         <small>$</small>
//                         <strong>{price}</strong>
//                     </p>
//                     <div className="product__rating">
//                         {
//                             Array(rating).fill().map((_) => (<p>⭐</p>))
//                         }
//                     </div>
//                 </div>
//                 <Link to={`/details/${id}`}>
//                     <img className="product__image" src={image} />
//                 </Link>
//                 <Button onClick={() => this.props.action(id, title, price, image, rating)}>Add to Basket</Button>
//                 {/* {notification()} */}
//             </div>
//         )
//     }
// }