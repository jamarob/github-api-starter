import BrowserMain from '../components/BrowserMain'
import { Link, useHistory, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getPulls, getUser } from '../service/github-api'
import Avatar from '../components/Avatar'
import List from '../components/List'

export default function PullsBrowser() {
  const { username, reponame } = useParams()
  const [profile, setProfile] = useState()
  const [pulls, setPulls] = useState([])
  const history = useHistory()

  useEffect(() => {
    getUser(username)
      .then(setProfile)
      .then(() => getPulls(username, reponame))
      .then(setPulls)
      .catch(error => {
        history.push('/')
        console.error(error)
      })
  }, [username, reponame, history])

  if (!profile) {
    return null
  }

  return (
    <BrowserMain>
      <Link to={`/repos/${username}`}>Back</Link>
      <Avatar profile={profile} />
      <h2>
        {username}s pulls for {reponame}
      </h2>
      <List>
        {pulls.map(pull => (
          <li key={pull.id}>
            <a target="_blank" rel="noreferrer" href={pull.html_url}>
              {pull.title}
            </a>
          </li>
        ))}
      </List>
    </BrowserMain>
  )
}
