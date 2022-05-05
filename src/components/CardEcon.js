import React from 'react';
import './Cards.css';
import '../App.css';
import { Button } from './Button';

function CardEcon() {
  return (
    <div className='cards'>
       <div className ='cards__container'>

        <div className='cards__wrapper'>
        On the other hand, another reason why some people consider electrical vehicles over gasoline vehicles is that electric vehicles are cheaper to refuel. A simple explanation for this is that electricity can be easily reproduced while gasoline take millions of years to form. Therefore, not only that gasoline is much more expensive than electricity, but its price is also fairly unstable. Abraham Pizam and Julianne Pokela describes once in history when gasoline price raised dramatically because of supply shortage in their article “The 1979 US Gasoline Shortage and Its Impact on the Tourism Industry.” Although the impact was not deadly, the crisis still causes many people to be unemployed especially those who worked in the tourism industry. As explained by Piazam and Pokela, the tourism industry in highly energy dependent since automobile accumulates a large percentage of tourism travel. Not only that the price of the gasoline gone up, but the shortage also created a lot of inconvenience for the people whose were living in the United States. “Following an outcry from the general public, the states received authority to regulate gasoline sales during those summer months. Massachusetts, like other states, adopted an odd/even rationing system whereby gasoline stations were allowed to sell gasoline to motorists with odd numbered automobile license plates on odd days of the calendar, and to those with even numbered plates on even days. Gasoline stations were not allowed to sell more than 20 gallons per customer and motorists were not allowed to buy gasoline unless half or more of their tank was empty. By the end of the summer, most states discontinued their rationing plan as the gasoline supply from the manufacturers increased to its previous levels,” Pizam and Pokela describes in their article.
        </div>

        <div className='cards__wrapper'>
        Moreover, the shortage on gasoline led to unemployment, nearly forty-one point five percent of the respondents from the survey that was conducted by Pizam and Pokela had reported that they either laid off employees or did not fill job vacancies because of the gasoline shortage. Conclusively, a heavy reliant on gasoline can lead to economic crisis because the price and supply of gasoline is highly unstable. And a transition from gasoline vehicles to electric vehicles can help reducing the impact of such crises for both individuals and the whole society. Shinde and Swarup specifically calls out the economic relationship between the price for electricity and demand for electric vehicles, they provided realistic mathematical models to found a balance between the electricity and demand for electric vehicles, and suggested that the price of electricity will raise with the demand for electric vehicle, but nevertheless that it will never surpass the price of gasoline for the same milage. All of the above gave us an idea on how the transition from gasoline vehicles to electric vehicle can benefit the society economically. Although that gasoline as a natural resources still has some advantage as vehicle fuel such as having a less time consuming fueling process and longer milage when it is fully fuel, electricity is a better choice economically because it is cheaper, and it is due to the reason that it can be easily produced.
        </div>

        <Button 
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          LinkSet ='/Environment'
        >
          <i class="fas fa-arrow-left"></i> PREVIOUS PAGE
        </Button>
        <Button 
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          LinkSet ='/Conclusion'
        >
          NEXT PAGE <i class="fas fa-arrow-right"></i>
        </Button>
      </div>
    </div>
  );
}

export default CardEcon;