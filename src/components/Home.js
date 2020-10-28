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

    return (
        <div className="home" >
            <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                alt="" />
            {display ? <AddProductNotification notification={notification} itemsCount={productsCount(basket)} 
            basketTotal={getBasketTotal(basket)} closeNotification={closeNotification}/> : null}
            <div className="home__row">
                {products.map(x =>
                    <Product action={handler}  buttonClick  
                        id={x.id}
                        title={x.title}
                        price={x.price}
                        rating={x.rating}
                        image={x.image}
                    />
                )}
            </div>
            <div className="home__row">
                <Product
                    id={123123}
                    title={"Acer Nitro VG240Ybmiix 23.8 Inch FHD Gaming Monitor, Black (IPS Panel, FreeSync, 1ms, ZeroFrame, HDMI, VGA) Black/Red"}
                    price={323.50}
                    rating={3}
                    image={"https://m.media-amazon.com/images/I/715Zbt1WrrL._AC_UY218_.jpg"}
                />
                <Product
                    title={"Rolex Sea-Dweller Deepsea D-Blue James Cameron Dial Steel Ceramic Watch 126660"}
                    price={19.287}
                    rating={5}
                    image={"https://m.media-amazon.com/images/I/71xdZmdY17L._AC_UL320_.jpg"}
                />
                <Product
                    title={"Umi. by Amazon - Gaming Office Ergonomic Computer Desk Chair with Padded Footrest (White)"}
                    price={200}
                    rating={3}
                    image={"https://m.media-amazon.com/images/I/61meDRZr-JL._AC_UL320_.jpg"}
                />
            </div>
            <div className="home__row">
                <Product
                    id={123123}
                    title={"Apple iPhone 11 (128GB) - Black"}
                    price={649}
                    rating={5}
                    image={"https://m.media-amazon.com/images/I/71iO2R+CLjL._AC_UY218_.jpg"}
                />
            </div>
        </div>
    )
}

export default Home

// class Home extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             products: [],
//             notification: {},
//             display: false
//         };
//         this.handler = this.handler.bind(this);
//     }

//     handler(id, title, price, image, rating) {
//         this.setState({
//             display: true,
//             notification: {
//                 id,
//                 title,
//                 price,
//                 image,
//                 rating
//             }
//         })
//     }
//     componentDidMount() {
//         db.ref('/Products/').once('value').then(snapshot => {
//             this.setState({ products: snapshot.val().slice(1) });
//         });
//     }

//     render() {
//         return (
//             <div className="home" >
//                 <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
//                     alt="" />
//                 {this.state.display ? <AddProductNotification notification={this.state.notification} /> : null}
//                 <div className="home__row">
//                     {this.state.products.map(x =>
//                         <Product action={this.handler} buttonClick
//                             id={x.id}
//                             title={x.title}
//                             price={x.price}
//                             rating={x.rating}
//                             image={x.image}
//                         />
//                     )}
//                 </div>
//                 <div className="home__row">
//                     <Product
//                         id={123123}
//                         title={"Acer Nitro VG240Ybmiix 23.8 Inch FHD Gaming Monitor, Black (IPS Panel, FreeSync, 1ms, ZeroFrame, HDMI, VGA) Black/Red"}
//                         price={323.50}
//                         rating={3}
//                         image={"https://m.media-amazon.com/images/I/715Zbt1WrrL._AC_UY218_.jpg"}
//                     />
//                     <Product
//                         title={"Rolex Sea-Dweller Deepsea D-Blue James Cameron Dial Steel Ceramic Watch 126660"}
//                         price={19.287}
//                         rating={5}
//                         image={"https://m.media-amazon.com/images/I/71xdZmdY17L._AC_UL320_.jpg"}
//                     />
//                     <Product
//                         title={"Umi. by Amazon - Gaming Office Ergonomic Computer Desk Chair with Padded Footrest (White)"}
//                         price={200}
//                         rating={3}
//                         image={"https://m.media-amazon.com/images/I/61meDRZr-JL._AC_UL320_.jpg"}
//                     />
//                 </div>
//                 <div className="home__row">
//                     <Product
//                         id={123123}
//                         title={"Apple iPhone 11 (128GB) - Black"}
//                         price={649}
//                         rating={5}
//                         image={"https://m.media-amazon.com/images/I/71iO2R+CLjL._AC_UY218_.jpg"}
//                     />
//                 </div>
//             </div>
//         )
//     }
// }