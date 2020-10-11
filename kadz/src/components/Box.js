import React, { Component } from 'react'
import '../assets/css/box.css'
import bike from '../assets/imgs/bike.png';

export class Box extends Component {
    render() {
        return (
            <div className="box-wrapper">
                <img src={bike} alt="" className="box-text-img"/>
                <div className="box-text-1">Super Fast Delievery</div>
                <div className="box-text-2">We only need 40-50 minutes to get your product in to the customer hands.</div>
                <div className="box-text-3">
                    Why Choose <br/>
                    <span className="big-text">KUDZOKA</span>
                </div>
            </div>
        )
    }
}

export default Box