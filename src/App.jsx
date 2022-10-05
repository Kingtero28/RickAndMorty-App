import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import CardError from './components/CardError'
import CardResident from './components/CardResident'
import FilterList from './components/FilterList'
import LocationInfo from './components/LocationInfo'
import getRandomNumber from './utils/getRandomNumber'

function App() {

  const [location, setLocation] = useState()
  const [searchInput, setSearchInput] = useState('')
  const [suggestedList, setSuggestedList] = useState()
  const [hasError, setHasError] = useState(false)

  useEffect(() => {

  let id = getRandomNumber()

  if (searchInput) {
    id = searchInput
  }

  const URL = `https://rickandmortyapi.com/api/location/${id}`

  axios.get(URL)
    .then(res => {
      setHasError(false)
      setLocation(res.data)
    })
    .catch(err => setHasError(true))
  }, [searchInput])

  const handleSubmit = event => {
    event.preventDefault()
    setSearchInput(event.target.idLocation.value)
  }

  const handleChange = event => {

    if(event.target.value === '') {
      return setSuggestedList()
    }
    const URL = `https://rickandmortyapi.com/api/location?name=${event.target.value}`

    axios.get(URL)
      .then(res => setSuggestedList(res.data.results))
      .catch(err => console.log(err))
  }

  return (
    <div className="App">
      <img className='headBoard' src="https://cdn.shopify.com/s/files/1/0346/8063/5529/collections/rick-morty-collection-banner_1400x.jpg?v=1590095280" alt="img" />
      <h1 className='card__title'>Rick And Morty</h1>
      <form className='card__submit' onSubmit={handleSubmit}>
        <input className='card__input' id='idLocation' placeholder='type a location id' type="text" onChange={handleChange} />
        <button className='card__btn'>Search</button>
        <FilterList suggestedList={suggestedList} setSearchInput={setSearchInput} />
      </form>
      {
        hasError ?
          <CardError />
        :
          <>
            <LocationInfo location={location} />
            <div className='card-container'>
              {
                location?.residents.map(url => (
                <CardResident key={url} url={url} />
                ))
              }
            </div>
          </>
      }
    </div>
  )
}

export default App
