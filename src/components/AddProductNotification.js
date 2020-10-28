import React from 'react'
import { Link } from 'react-router-dom'
import CheckIcon from '@material-ui/icons/Check';
import '../css/AddProductNotification.css'
import { Button } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

function AddProductNotification({ notification, itemsCount, basketTotal, closeNotification }) {
    return (
        <div className="notification">
            <div className="notification__addToBasket">
                <CheckIcon className="notification__addToBasket__checkIcon" />
                <img src={notification.image} alt="" />
                <h1>Added to Basket</h1>
            </div>
            <div className="notification__basketSubtotal">
                <div className="notification__basketSubtotal__subtotal">
                    <span>
                        <b>Basket Subtotal</b>
                ({itemsCount} items):
                </span>
                    <span className="notification__basketSubtotal__subtotal__total">${basketTotal}</span>
                </div>
                <div className="notification__basketSubtotal__buttons">
                    <Link to="/checkout" style={{ "text-decoration": "none" }}>
                        <Button className="btnn" style={{
                            "background-color": "#f0c14b", "border": "1px solid",
                            "border-color": "#a88734 #9c7e31 #846a29", "margin-right": "7px"
                        }}>Edit basket</Button>
                    </Link>
                    <Link to="/checkout" style={{ "text-decoration": "none" }}>
                        <Button className="btnn" style={{
                            "background-color": "#f0c14b", "border": "1px solid",
                            "border-color": "#a88734 #9c7e31 #846a29", "margin-right": "25px"
                        }}>Proceed to checkout</Button>
                    </Link>
                </div>
                <div className="notification__basketSubtotal__close">
                    <CloseIcon onClick={() => closeNotification()} />
                </div>
            </div>
        </div >
    )
}

export default AddProductNotification