import { Link, useHistory, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getRepos, getUser } from '../service/github-api'
import Avatar from '../components/Avatar'
import BrowserMain from '../components/BrowserMain'
import List from '../components/List'

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
  }, [username, history])

  if (!profile) {
    return null
  }

  return (
    <BrowserMain>
      <Link to="/">Back</Link>
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
    </BrowserMain>
  )
}
