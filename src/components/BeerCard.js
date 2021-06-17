import React, { useState } from 'react';

function BeerCard(props) {
  const { name, image_url, abv, ibu, description } = props;
  const [ isHidden, setHide ] = useState(true)
  
  return(
    <li class="card" style={{ listStyle: "none" }}>
      <div 
        class="clickable" 
        onClick = { () => {isHidden ? setHide(false): setHide(true)} }>
          <h4> { name } </h4>
          <img 
            style={{ height: "200px"}} 
            src={ image_url }
          ></img>      
      </div>
      {isHidden ?
        <div></div> :
          <div class="popUp">
            <p class="g1">ABV: { abv }</p>
            <p class="g2">IBU: { ibu }</p>
            <p class="g3">Description: { description }</p>
          </div>
      }
    </li>
  )
};

export default BeerCard;