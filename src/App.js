import './App.css'
import { useEffect, useState } from 'react'
import { getLoggedInUser } from './service/github-api'

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
    <div className="App">
      {profile && <img src={profile.avatar_url} alt={profile.login} />}
      {error && <img src={`https://http.cat/${error}`} alt={error} />}
    </div>
  )
}

export default App
