import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getPullsByRepoName } from '../service/github-api'
import PullsList from '../components/PullsList'

export default function PullsPage() {
  const { userName, repoName } = useParams()
  const [pulls, setPulls] = useState([])
  const [error, setError] = useState()
  const [next, setNext] = useState(false)
  const [page, setPage] = useState(1)

  useEffect(() => {
    getPullsByRepoName(repoName, userName, 1)
      .then(setPulls)
      .then(() =>
        getPullsByRepoName(repoName, userName, page + 1).then(pulls =>
          pulls.length === 0 ? setNext(false) : setNext(true)
        )
      )
      .catch(error => console.error(error))
  }, [repoName, userName, page])

  const handleOnClick = () => {
    setPage(page + 1)
    getPullsByRepoName(repoName, userName, page)
      .then(setPulls)
      .then(() =>
        getPullsByRepoName(repoName, userName, page + 1).then(pulls =>
          pulls.length === 0 ? setNext(false) : setNext(true)
        )
      )
      .catch(error => console.error(error))
  }

  return (
    <section>
      {next && <button onClick={handleOnClick}>next page</button>}
      {pulls.length === 0 ? <p>no pulls found</p> : <PullsList pulls={pulls} />}
    </section>
  )
}
