import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getRepoByUser } from '../service/github-api'
import RepoList from '../components/RepoList'

export default function RepoPage() {
  const { userName } = useParams()
  const [error, setError] = useState()
  const [repos, setRepos] = useState([])

  useEffect(() => {
    getRepoByUser(userName)
      .then(fetchedRepos => setRepos(fetchedRepos))
      .catch(error => setError(error.response.status))
  }, [userName])

  return (
    <div>
      {repos.length === 0 ? <p>no repos found</p> : <RepoList repos={repos} />}
    </div>
  )
}
