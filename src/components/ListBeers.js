import React from 'react';
import BeerCard from './BeerCard'

function ListBeers(props) {
  return (
    <li style={ {listStyle: "none"} }>
      {props.beer.map((beer, index) => {
        return (
          <BeerCard 
            key={index}
            name={beer.name} 
            image_url={beer.image_url}
            abv={beer.abv}
            ibu={beer.ibu}
            description={beer.description}
          />
        )
      })}
    </li>
  )
}

export default ListBeers;