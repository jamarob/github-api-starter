import axios from 'axios'

const token = process.env.REACT_APP_GITHUB_TOKEN

const instance = axios.create({
  timeout: 10000,
  headers: { Authorization: `Bearer ${token}` },
})

export const getLoggedInUser = () =>
  instance.get('https://api.github.com/user').then(response => response.data)

export const getUser = username =>
  instance
    .get(`https://api.github.com/users/${username}`)
    .then(response => response.data)

export const getRepos = username =>
  instance
    .get(`https://api.github.com/users/${username}/repos`)
    .then(response => response.data)

export const getPulls = (username, reponame) =>
  instance
    .get(`https://api.github.com/repos/${username}/${reponame}/pulls`)
    .then(response => response.data)
