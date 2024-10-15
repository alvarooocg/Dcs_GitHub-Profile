import { useEffect, useState } from 'react'
import './App.css'

import Header from './components/Header'
import Container from './components/Container'

import services from './services/profiles'

function App() {

  const [keyword, setKeyword] = useState('github')
  const [profile, setProfile] = useState({})
  const [repos, setRepos] = useState()

  useEffect(() => {
    services 
      .getUser(keyword)
      .then(
        gitProfile => {
          console.log(gitProfile)
          setProfile(gitProfile)
        })
      .catch(error => 
        console.log(error)
      )
  }, [keyword])

  useEffect(() => {
    services
      .getRepos(keyword)
      .then(
        gitRepos => setRepos([gitRepos][0].slice(0, 4))
      )
      .catch(error => 
        console.log(error)
      )
  }, [keyword])

  const handleFilterChange = (event) => {
    setKeyword(event.target.value)
  } 

  // const filteredProfiles = profiles.filter()

  return (
    <div className='body'>
      <Header filter={keyword} handleFilterChange={handleFilterChange} profile={profile} />
      <Container profile={profile} repos={repos} />
    </div>
  )
}

export default App