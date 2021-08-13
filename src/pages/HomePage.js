import { useState } from 'react'
import { getUserByName } from '../service/github-api'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'

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
    <Wrapper>
      <Profile>
        {user && (
          <img src={user.avatar_url} alt="profile picture of github user" />
        )}
        {error && <img src={`https://http.cat/${error}`} alt={error} />}
      </Profile>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="user name"
          value={userName}
          onChange={event => setUserName(event.target.value)}
        />
        <button type="submit">search</button>
      </form>
      {user && (
        <Link to={`/${user.login}/repo`}>
          {user && user.name ? <p>{user.name}</p> : <p>{user.login}</p>}
          <p>has {user.public_repos} repos</p>
        </Link>
      )}
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: grid;
  grid-template-rows: repeat(3, min-content);
  grid-gap: 12px;
`

const Profile = styled.section`
  img {
    max-width: 200px;
  }
`
