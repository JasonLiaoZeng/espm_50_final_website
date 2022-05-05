import React from 'react';
import './Cards.css';
import '../App.css';
import { Button } from './Button';

function CardEnvironment() {
  return (
    <div className='cards'>
      <div className ='cards__container'>
        <div className='cards__wrapper'>
        First of all, electric vehicles create significantly less air pollution in comparison to gasoline vehicles, and a lower pollution level can benefits people’s living quality through benefiting their health. According to Priyanka Shinde and Kesasanakurty Shanti Swarup in their article “Stackelberg Game-Based Demand Response in Multiple Utility Environments for Electric Vehicle Charging,” internal combustion engine vehicles like airplanes, cars, trucks, ships and so on are responsible for about sixteen percent of the man-made carbon dioxide all across the globe. Besides carbon dioxide, internal combustion engine releases many other more toxic chemicals into the air, and those toxic chemicals including hydrocarbon and nitroxide can cause several damages to human body in a long term, as affirmed by Xi, Haoning in their article “Differentiable Road Pricing for Environment-Oriented Electric Vehicle and Gasoline Vehicle Users in the Bi-Objective Transportation Network.”  Also, Xi confirmed in his article that vehicular use is a major source of air pollution, which contributes thirty to fifty percent of hydrocarbon, forty to sixty percent of nitrogen oxide, and eighty to ninety percent of carbon monoxide emissions into the air, and those toxic air creates the greenhouse effect to the globe and raise health issues within the human society. 
        </div>
        <div className='cards__wrapper'>Unsurprisingly, helping the environment is one of the reasons why many car owners choose an electrical vehicle over gasoline vehicle. As affirmed by Xi in his article, a series of studies on consumer preferences for electric vehicles conclude that the alleviation of environmental pollution is one of the main factors that people consider while buying electric vehicles, and nearly eighty percent of the electrical vehicle purchaser considered the environmental benefits as their primary motivator. In addition, Xi stated that more people started to focus on pro-environmental behavior in the modern day because of the belief that health has a direct relationship with the condition of the environment.</div>
        
        <Button 
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          LinkSet ='/Econ'
        >
          NEXT PAGE <i class="fas fa-arrow-right"></i>
        </Button>
      </div>
    </div>
  );
}

export default CardEnvironment;