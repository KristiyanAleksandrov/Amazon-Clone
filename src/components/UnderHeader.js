import React from 'react'
import { Link } from 'react-router-dom'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import '../css/UnderHeader.css'

class UnderHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            country: ''
        };
    }

    componentDidMount() {
        fetch('https://extreme-ip-lookup.com/json/')
            .then(res => res.json())
            .then(response => {
                this.setState({ country: `${response.country}, ${response.city}` });
            });
    }

    render() {
        return (
            <div className='underHeader'>
                <div className="underHeader__deliver">
                    <LocationOnIcon style={{ color: 'white' }} />
                    <div className='underHeader__deliver__info'>
                        <span className="underHeader__deliver__info__one">Deliver to </span>
                        <span className="underHeader__deliver__info__two">{this.state.country}</span>
                    </div>
                </div>
                <div className="underHeader__nav">
                    <Link className="underHeader__nav__link">
                        <span>Today's Deals</span>
                    </Link>
                    <Link className="underHeader__nav__link">
                        <span>Customer Service</span>
                    </Link>
                    <Link className="underHeader__nav__link">
                        <span>Gift Cards</span>
                    </Link>
                    <Link className="underHeader__nav__link">
                        <span>Registry</span>
                    </Link>
                    <Link className="underHeader__nav__link">
                        <span>Sell</span>
                    </Link>
                </div>
            </div>
        )
    }
}

export default UnderHeader;