import { Link } from 'react-router-dom'

export default function RepoList({ repos }) {
  return (
    <section>
      <ul>
        {repos.map(repo => {
          return (
            <li key={repo.id}>
              <Link to={`/${repo.owner.login}/${repo.name}`}>{repo.name}</Link>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
