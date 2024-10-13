import { useEffect, useState } from 'react'
import './App.css'

import Header from './components/Header'

import services from './services/profiles'

function App() {

  const [keyword, setKeyword] = useState('')
  const [profiles, setProfiles] = useState([])

  useEffect(() => {
    services
      .getAll()
      .then(initialProfiles => 
        setProfiles(initialProfiles)
      )
      .catch(error => 
        console.log("ERROR obtaining the data")
      )
  }, [])

  const handleFilterChange = (event) => setKeyword(event.target.value)

  // const filteredProfiles = profiles.filter()

  return (
    <body>
      <Header filter={keyword} handleFilterChange={handleFilterChange}/>
    </body>
  )
}

export default App