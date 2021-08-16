import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'
import { useState } from 'react'
import { getUser } from '../service/github-api'
import Avatar from '../components/Avatar'

export default function UserSearch() {
  const [username, setUsername] = useState('')
  const [profile, setProfile] = useState()

  const handleSubmit = event => {
    event.preventDefault()
    getUser(username)
      .then(profile => {
        setProfile(profile)
        setUsername('')
      })
      .catch(error => {
        setProfile()
      })
  }

  return (
    <Main>
      {profile ? <Avatar profile={profile} /> : <p>Enter a GitHub user</p>}
      <Form onSubmit={handleSubmit}>
        <TextField>
          username
          <input
            type="text"
            name="username"
            value={username}
            onChange={({ target }) => setUsername(target.value)}
          />
        </TextField>
        <button>Search</button>
      </Form>
      {profile && (
        <Link to={`/repos/${profile.login}`}>View {profile.login}s repos</Link>
      )}
    </Main>
  )
}

const Main = styled.main`
  display: grid;
  grid-template-rows: 200px 1fr 1fr;
  grid-gap: 12px;
  justify-content: center;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  text-align: center;
`

const TextField = styled.label`
  input {
    display: block;
    width: 100%;
  }
`
