import { useEffect, useState } from 'react'
import './App.css'

import Header from './components/Header'
import Container from './components/Container'

const AUTH_TOKEN = import.meta.env.VITE_AUTH_TOKEN

function App() {

  const [keyword, setKeyword] = useState('github')
  const [profile, setProfile] = useState({})
  const [repos, setRepos] = useState([])
  const [toSearch, setToSearch] = useState('')

  useEffect(() => {
    if (keyword === '') {
      setToSearch('github')
    } else {
      setToSearch(keyword)
    }

     fetch(`https://api.github.com/users/${toSearch}`, {
      headers: {
        'Authorization': `token ${AUTH_TOKEN}`
      }
     })
      .then(response => response.json())
      .then(data => {
        setProfile(data)
      })
      .catch(error => {
        console.log(error)
      })
  }, [keyword])

  useEffect(() => {
    fetch(`https://api.github.com/users/${toSearch}/repos`, {
      headers: {
        'Authorization': `token ${AUTH_TOKEN}`
      }
    })
    .then(response => response.json())
    .then(data => {
      setRepos([data][0].slice(0, 4))
    })
    .catch(error => {
      console.log(error)
    })
  }, [keyword])

  const handleFilterChange = (event) => {
    setKeyword(event.target.value)
  }

  return (
    <div className='body'>
      <Header filter={keyword} handleFilterChange={handleFilterChange} profile={profile} />
      <Container profile={profile} repos={repos} />
    </div>
  )
}

export default App