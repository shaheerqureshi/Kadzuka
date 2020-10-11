import React, { Component } from 'react'
import Nav from '../components/Nav'
import Box from '../components/Box'
import BoxOne from '../components/BoxOne'
import BoxTwo from '../components/BoxTwo'
import SecOne from '../components/SecOne';
import Footer from '../components/Footer';
import waves from '../assets/imgs/waves.png'; 
import one from '../assets/imgs/1.png';
import two from '../assets/imgs/2.png';
import three from '../assets/imgs/3.png';

export class Kudzoka extends Component {
    render() {
        return (
            <div>
                <Nav/>
                <SecOne/><br/>
                <img src={waves} alt="" className="waves-img"/>
                <div className="boxes-wrapper">
                    <Box/>
                    <BoxOne/>
                    <BoxTwo/>
                </div>
                <hr/>
                <div className="pictures-wrapper">
                    <img src={one} alt="" className=""/>
                    <img src={two} alt="" className="pictures-wrapper-img2"/>
                    <img src={three} alt="" className=""/>
                </div>
                <div className="text-wrapper">
                    <div className="text-1">Round the Clock Support</div>
                    <div className="text-2">We only need 40-50 minutes to get your product in to the customer hands.</div>
                </div>
                <Footer/>
            </div>
        )
    }
}
export default Kudzoka
