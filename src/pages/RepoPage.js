import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getRepoByUser, getUserByName } from '../service/github-api'
import RepoList from '../components/RepoList'

export default function RepoPage() {
  const { userName } = useParams()
  const [error, setError] = useState()
  const [repos, setRepos] = useState([])
  const [user, setUser] = useState([])
  const [numberOfPages, setNumberOfPages] = useState(1)

  useEffect(() => {
    getRepoByUser(userName, 1)
      .then(fetchedRepos => setRepos(fetchedRepos))
      .catch(error => setError(error.response.status))
    getUserByName(userName)
      .then(fetchedUser => setUser(fetchedUser))
      .catch(error => setError(error.response.status))
  }, [userName])

  useEffect(() => {
    setNumberOfPages(Math.ceil(user.public_repos / 30))
  }, [repos, user])

  const createPageLinks = numberOfPages => {
    const pageLinksArray = []
    for (let i = 1; i < numberOfPages + 1; i++) {
      pageLinksArray.push(
        <button type="button" onClick={() => handleClick(i)}>
          Page: {i}
        </button>
      )
    }
    return pageLinksArray
  }

  const handleClick = pageToLoad => {
    getRepoByUser(userName, pageToLoad)
      .then(fetchedRepos => setRepos(fetchedRepos))
      .catch(error => setError(error.response.status))
  }

  return (
    <div>
      {repos.length === 0 ? <p>no repos found</p> : <RepoList repos={repos} />}
      {createPageLinks(numberOfPages)}
    </div>
  )
}
