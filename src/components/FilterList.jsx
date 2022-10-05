import React from 'react'
import './styles/filterList.css'

const FilterList = ({ suggestedList, setSearchInput }) => {

    const handleClick = id => setSearchInput(id)

    return (
        <ul className='card__filter'>
            {
                suggestedList?.map(location => (
                    <li className='card__list' onClick={() => handleClick(location.id)} key={location.id}>{location.name}</li>
                ))
            }
        </ul>
    )
}

export default FilterList