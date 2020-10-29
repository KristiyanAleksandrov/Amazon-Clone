import React, { useState, useEffect } from "react"
import '../css/Home.css'
import Product from '../components/Product'
import AddProductNotification from '../components/AddProductNotification'
import { useStateValue } from '../StateProvider'
import { productsCount, getBasketTotal } from '../reducer'
import { db } from '../firebase'

function Home() {
    const [{ basket }] = useStateValue();

    const [products, setProducts] = useState([]);
    const [notification, setNotification] = useState({});
    const [display, setDisplay] = useState(false);

    const handler = (id, title, price, image, rating) => {
        setDisplay(true)
        setNotification(
            {
                id,
                title,
                price,
                image,
                rating
            })
    }

    const closeNotification = () => {
        setDisplay(false)
    }
    useEffect(() => {
        db.ref('/Products/').once('value').then(snapshot => {
            setProducts(snapshot.val().slice(1));
        });
    });

    let firstThreeProducts = products.slice(0,3);
    let nextTwoElements = products.slice(3,5);
    let lastElement = products.slice(5,6);

    return (
        <div className="home" >
            <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                alt="" />
            {display ? <AddProductNotification notification={notification} itemsCount={productsCount(basket)}
                basketTotal={getBasketTotal(basket)} closeNotification={closeNotification} /> : null}
            <div className="home__row">
                {firstThreeProducts.map((x) => {
                    return <Product action={handler} buttonClick
                        id={x.id}
                        title={x.title}
                        price={x.price}
                        rating={x.rating}
                        image={x.image}
                    />
                }
                )}
             </div>
             <div className="home__row">
                {nextTwoElements.map((x) => {
                    return <Product action={handler} buttonClick
                        id={x.id}
                        title={x.title}
                        price={x.price}
                        rating={x.rating}
                        image={x.image}
                    />
                }
                )}
             </div>
             <div className="home__row">
                {lastElement.map((x) => {
                    return <Product action={handler} buttonClick
                        id={x.id}
                        title={x.title}
                        price={x.price}
                        rating={x.rating}
                        image={x.image}
                    />
                }
                )}
             </div>
        </div>
    )
}

export default Home