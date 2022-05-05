import React from 'react';
import '../Cards.css';
import '../../App.css';
import Footer from '../Footer';
import { Button } from '../Button';

function Conclusion() {
  return (
    <>
        <div className='cards'>
        <h1>Conclusion</h1>
        <div className ='cards__container'>
          <div className='cards__wrapper'>
          Overall, the rise of electric vehicles benefits both the human society and individual electric vehicle owners environmentally and economically. By using electricity instead of gasoline as the resource to refuel, man-made pollution into the air into the air will be reduce by a significant amount, and that could help slowing down the greenhouse effect and raise the living condition of people living in the area. Moreover, because electricity has a cheaper and more stable price, it is more tolerated to global crises, and that can help individual electric vehicle owners save money over time.
          </div>
          <Button 
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          LinkSet ='/Econ'
        >
          <i class="fas fa-arrow-left"></i> PREVIOUS PAGE
        </Button>
        <Button 
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          LinkSet ='/Reference'
        >
          REFERENCE <i class="fas fa-arrow-right"></i>
        </Button>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Conclusion;