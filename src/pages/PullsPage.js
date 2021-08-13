import { useParams } from 'react-router-dom'
import { Component, useEffect, useState } from 'react'
import { getPullsByRepoName } from '../service/github-api'

export default function PullsPage() {
  const { userName, repoName } = useParams()
  const [pulls, setPulls] = useState([])
  const [error, setError] = useState()

  useEffect(() => {
    getPullsByRepoName(repoName, userName)
      .then(setPulls)
      .catch(error => setError(error.response.status))
  }, [])

  return (
    <section>
      {pulls.length === 0 ? <p>no pulls found</p> : <PullsList pulls={pulls} />}
    </section>
  )
}
