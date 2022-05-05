import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';


function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/EV_Charging.mp4' autoPlay loop muted />
      <h1>Why is EV Uprising?</h1>
      <p>read to see more</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          LinkSet= '/Environment'
        >
          START READING
        </Button>
        <Button 
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          LinkSet ='/Reference'
        >
          SEE REFERENCE <i className='fa-solid fa-book' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;