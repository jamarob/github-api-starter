import { useState } from 'react'
import { getUserByName } from '../service/github-api'
import { Link } from 'react-router-dom'

export default function HomePage() {
  const [userName, setUserName] = useState('')
  const [user, setUser] = useState()
  const [error, setError] = useState()

  const handleSubmit = event => {
    event.preventDefault()
    getUserByName(userName)
      .then(fetchedUser => {
        setUser(fetchedUser)
      })
      .catch(error => setError(error.response.status))
  }

  return (
    <section>
      <section>
        {user && (
          <img src={user.avatar_url} alt="profile picture of github user" />
        )}
        {error && <img src={`https://http.cat/${error}`} alt={error} />}
      </section>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="user name"
          value={userName}
          onChange={event => setUserName(event.target.value)}
        />
        <button type="submit">search</button>
      </form>
      {user && <Link to={`/${user.login}/repo`}>Show repo</Link>}
    </section>
  )
}
