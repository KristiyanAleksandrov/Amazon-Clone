import React from 'react'
import { useStateValue } from '../StateProvider'
import '../css/Checkout.css'
import CheckoutProduct from '../components/ChekoutProduct'
import Subtotal from '../components/Subtotal'

function Checkout() {
    const [{ basket }] = useStateValue();
    const basketProducts = Object.values(basket);
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad"
                    src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                    alt="" />
                {
                    basketProducts?.length > 0 ?
                        (
                            <div>
                                <h2 className="checkout__title">Shopping Basket</h2>
                                {
                                    basketProducts.map(i =>
                                        <CheckoutProduct product={i.product} count={i.count}/>
                                    )
                                }
                            </div>
                        )
                        :
                        (
                            <div>
                                <h2>Shopping Basket is Empty</h2>
                                <p>You have no items in your basket.</p>
                            </div>
                        )
                }
            </div>
            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout;