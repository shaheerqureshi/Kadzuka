import React, { Component } from 'react'
import logo from '../assets/imgs/logo.PNG';
import '../assets/css/nav.css';

export class Nav extends Component {
    render() {
        return (
            <div className="navbar-wrapper">
                <div className="navbar-left">
                    <div className="navbar-left-icon">
                        <img src={logo} alt=""/>
                    </div>
                    <div className="navbar-left-text">Home</div>
                    <div className="navbar-left-text">Services</div>
                    <div className="navbar-left-text">About Us</div>
                    <div className="navbar-left-text">Help Center</div>
                </div>
                <div className="navbar-right">
                    <div className="navbar-right-login-btn">
                        <button className="login-btn">Login</button>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Nav
