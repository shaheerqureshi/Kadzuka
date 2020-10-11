import React, { Component } from 'react'
import human from '../assets/imgs/human.png';
import cloud from '../assets/imgs/clouds.png'; 
import '../assets/css/secone.css';

export class SecOne extends Component {
    render() {
        return (
            <div className="section-one-wrapper">
                <div className="section-one-wrapper-headings">
                    <div className="heading-1">You Sell it We <span className="purple-text"> Deliver </span>it</div>
                    <div className="heading-2">Leave the logistics to us, while you focus on your customers and products.</div>
                </div>
                <div className="section-one-wrapper-imgs">
                    <div className="section-one-bg">
                        <img src={human} alt="" className="section-one-img-1"/><br/>
                        <img src={cloud} alt="" className="section-one-img-2"/>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default SecOne
