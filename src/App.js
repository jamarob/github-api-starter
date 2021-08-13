import './App.css'
import { useEffect, useState } from 'react'
import { getLoggedInUser } from './service/github-api'
import Header from './components/Header'
import HomePage from './pages/HomePage'

function App() {
  const [profile, setProfile] = useState()
  const [error, setError] = useState()

  useEffect(() => {
    getLoggedInUser()
      .then(setProfile)
      .catch(error => setError(error.response.status))
  }, [])

  if (!profile && !error) {
    return <p>loading</p>
  }

  return (
    <section className="App">
      <Header error={error} profile={profile} />
      <HomePage />
    </section>
  )
}

export default App
