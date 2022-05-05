import React from 'react';
import '../../App.css';
import '../HeroSection.css'
import electricPic from "../../pictures/electric.jpg"
import Footer from '../Footer';
import CardEcon from '../CardEcon';


export default function Econ () {
    return(
        <>
            <div className='hero-container'>
                <img src={electricPic} alt='electric pic'/>
                <h1>Economic Reason</h1>
            </div>
            <CardEcon/>
            <Footer/>
        </>
    );

}