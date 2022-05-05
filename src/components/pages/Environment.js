import React from 'react';
import '../../App.css';
import '../HeroSection.css'
import forestPic from "../../pictures/forest_and_road.jpg"
import Footer from '../Footer';
import CardEnvironment from '../CardEnvironment';

export default function Environment () {
    return(
        <>
            <div className='hero-container'>
                <img src={forestPic} alt='forest pic'/>
                <h1>Environmental Reason</h1>
            </div>
            <CardEnvironment/>
            <Footer/>
        </>
    );

}