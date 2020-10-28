import React from 'react'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from '../StateProvider';
import { getBasketTotal } from '../reducer.js'
import '../css/Subtotal.css'

function Subtotal() {
    const [{ basket }, dispatch] = useStateValue();

    const removeAllItemFromBasket = () => {
        dispatch({
            type: 'REMOVE_ALL_ITEMS_FROM_BASKET'
        })
    }

    return (
        <div className="subtotal">

            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({basket.length} items): <strong>{value}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" />This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            <button onClick={removeAllItemFromBasket}>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal;