import React, { Component } from 'react'
import '../assets/css/box.css'
import clock from '../assets/imgs/clock.png';

export class Box extends Component {
    render() {
        return (
            <div className="box-wrapper-1">
                <img src={clock} alt="" className="box-text-img"/>
                <div className="box-text-1">Super Fast Delievery</div>
                <div className="box-text-2">We only need 40-50 minutes to get your product in to the customer hands.</div>
            </div>
        )
    }
}

export default Box