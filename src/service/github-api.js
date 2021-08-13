import axios from 'axios'

const token = process.env.REACT_APP_GITHUB_TOKEN

const instance = axios.create({
  timeout: 1000,
  headers: { Authorization: `Bearer ${token}` },
})

export const getLoggedInUser = () =>
  instance.get('https://api.github.com/user').then(response => response.data)

export const getUserByName = userName =>
  instance
    .get(`https://api.github.com/users/${userName}`)
    .then(response => response.data)

export const getRepoByUser = userName =>
  instance
    .get(`https://api.github.com/users/${userName}/repos`)
    .then(response => response.data)

export const getPullsByRepoName = (repoName, userName) =>
  instance
    .get(`https://api.github.com/repos/${userName}/${repoName}/pulls`)
    .then(response => response.data)
