import React from 'react'
import '../css/Details.css'
import { Link, withRouter } from 'react-router-dom';
import { db } from '../firebase'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useStateValue } from '../StateProvider';

class Details extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            product: {}
        }
    }

    componentDidMount() {
        db.ref('/Products/' + this.props.match.params.id).once('value').then(snapshot => {
            this.setState({ product: snapshot.val() });
        });
    }

    render() {
        // const [{ basket }, dispatch] = useStateValue();
        // const { id, title, price, image, rating } = this.state.product;

        // const addToBasket = () => {
        //     dispatch({
        //         type: 'ADD_TO_BASKET',
        //         item: {
        //             id,
        //             title,
        //             price,
        //             image,
        //             rating
        //         }
        //     }
        //     )
        // }
        return (
            <div className='details'>
                <img src="https://images-eu.ssl-images-amazon.com/images/G/02/B2B/Merch/ILM/ILM_650x45_VAT-message-3_UK._CB456689785_.jpg"></img>
                <Link to="/" className="details__backToProducts">{"<  "}Back to products</Link>
                <div className="product__details">
                    <div className="product__details__image" >
                        <img src={this.state.product.image}></img>
                    </div>
                    <div className="product__details__info">
                        <span>{this.state.product.title}</span>
                        <span className="product__details__info__rating">
                            {
                                Array(this.state.product.rating).fill().map((_) => (<p>⭐</p>))
                            }
                        </span>
                        <span>Price: {this.state.product.price} & FREE Delivery</span>
                        <strong>About this item</strong>
                    </div>
                    <div className="product__details__box">
                        <span className="product__details__box__price">${this.state.product.price}</span>
                        <p className="product__details__box__delivery">Fastest delivery: <b>Tuesday, Oct 20</b></p>
                        <p className="product__details__box__inStock">In stock.</p>
                        <span>
                            <label for="quantity">Quantity:</label>
                            <select name="quantity" className="product__details__box__select" autocomplete="off">
                                {
                                    Array.from({ length: 30 }, (_, i) => i + 1).map((x) => (<option value={x}>{x}</option>))
                                }
                            </select>
                        </span>
                        <div>
                            <ShoppingCartIcon className="product__details__box__shoppingCart" />
                            <button>Add to Basket</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Details)