import React, { Component } from 'react'
import '../assets/css/footer.css'
import people from '../assets/imgs/people.png';
import insta from '../assets/imgs/insta.png';
import whatsapp from '../assets/imgs/whatsapp.png';
import facebook from '../assets/imgs/facebook.png';

export class Footer extends Component {
    render() {
        return (
            <div className="footer-wrapper">
                <div className="footer-left">
                    <div className="btn-wrapper">
                        <button className="footer-btn">Apple</button>
                        <button className="footer-btn">Android</button>
                    </div>
                    <div className="icons-wrapper">
                        <img src={insta} alt=""/>
                        <img src={whatsapp} alt="" className="icon-img-2"/>
                        <img src={facebook} alt="" className="icon-img-3"/>
                    </div>
                    <div className="footer-text-wrapper">
                        <div className="footer-text-1">Home</div>
                        <div className="footer-text-2">Services</div>
                        <div className="footer-text-3">About Us</div>
                        <div className="footer-text-4">Help Center</div>
                    </div>
                </div>
                <div className="footer-right">
                    <img src={people} alt="" className="footer-img"/>
                </div>
            </div>
        )
    }
}

export default Footer
