import React from 'react'
import './styles/locationInfo.css'

const LocationInfo = ({location}) => {
  return (
    <article className='card__location'>
        <h2 className='card__location-name'>{location?.name}</h2>
        <ul className='card__data'>
            <li className='card_list'><span className='card__span'>Type: </span>{location?.type}</li>
            <li className='card_list'><span className='card__span'>Dimension: </span>{location?.dimension}</li>
            <li className='card_list'><span className='card__span'>Population: </span>{location?.residents.length}</li>
        </ul>
    </article>
  )
}

export default LocationInfo