import { Link, useHistory, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getRepos, getUser } from '../service/github-api'
import styled from 'styled-components/macro'
import Avatar from '../components/Avatar'

export default function RepoBrowser() {
  const { username } = useParams()
  const history = useHistory()

  const [profile, setProfile] = useState()
  const [repos, setRepos] = useState([])

  useEffect(() => {
    getUser(username)
      .then(profile => {
        setProfile(profile)
        return getRepos(username)
      })
      .then(setRepos)
      .catch(error => {
        history.push('/')
        console.error(error)
      })
  }, [username])

  if (!profile) {
    return null
  }

  return (
    <Main>
      <Avatar profile={profile} />
      <h2>{profile.login}s Repos</h2>
      <List>
        {repos.map(repo => {
          return (
            <li key={repo.id}>
              <Link to={`/pulls/${profile.login}/${repo.name}`}>
                {repo.name}
              </Link>
            </li>
          )
        })}
      </List>
    </Main>
  )
}

const Main = styled.main`
  display: grid;
  grid-template-rows: 200px min-content 1fr;
  grid-gap: 12px;
  justify-items: center;
`

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-gap: 12px;
`
