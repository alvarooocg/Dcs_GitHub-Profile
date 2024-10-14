import { useEffect, useState } from 'react'
import './App.css'

import Header from './components/Header'
import Container from './components/Container'

import services from './services/profiles'

function App() {

  const [keyword, setKeyword] = useState('')
  const [profile, setProfile] = useState([])

  const handleFilterChange = (event) => {
    setKeyword(event.target.value)
    
    services
      .getUser(keyword)
      .then(response => {
        setProfiles(response.data)
      )
  } 

  // const filteredProfiles = profiles.filter()

  return (
    <body>
      <Header filter={keyword} handleFilterChange={handleFilterChange}/>
      <Container />
    </body>
  )
}

export default App