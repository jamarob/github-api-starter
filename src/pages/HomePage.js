import { useState } from 'react'
import { getUserByName } from '../service/github-api'

export default function HomePage() {
  const [userName, setUserName] = useState('')
  const [user, setUser] = useState()

  const handleSubmit = event => {
    event.preventDefault()
    getUserByName(userName)
      .then(fetchedUser => {
        setUser(fetchedUser)
        console.log(user)
      })
      .catch(err => console.error(err))

    console.log('submit event')
  }

  return (
    <section>
      <section>
        {user && (
          <img src={user.avatar_url} alt="profile picture of github user" />
        )}
      </section>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="user name"
          value={userName}
          onChange={event => setUserName(event.target.value)}
        />
        <button type="submit">search</button>
      </form>
    </section>
  )
}
