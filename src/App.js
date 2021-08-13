import './App.css'
import { useEffect, useState } from 'react'
import { getLoggedInUser } from './service/github-api'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import RepoPage from './pages/RepoPage'
import PullsPage from './pages/PullsPage'

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
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/:userName/repo">
            <RepoPage />
          </Route>
          <Route path="/:userName/:repoName">
            <PullsPage />
          </Route>
        </Switch>
      </Router>
    </section>
  )
}

export default App
