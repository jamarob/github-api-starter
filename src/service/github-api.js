import axios from 'axios'

const token = process.env.REACT_APP_GITHUB_TOKEN

const instance = axios.create({
  timeout: 10000,
  headers: { Authorization: `Bearer ${token}` },
})

export const getLoggedInUser = () =>
  instance.get('https://api.github.com/user').then(response => response.data)

export const getUserByName = userName =>
  instance
    .get(`https://api.github.com/users/${userName}`)
    .then(response => response.data)

export const getRepoByUser = (userName, pageNumber) =>
  instance
    .get(`https://api.github.com/users/${userName}/repos?page=${pageNumber}`)
    .then(response => response.data)

export const getPullsByRepoName = (repoName, userName, pageNumber) =>
  instance
    .get(
      `https://api.github.com/repos/${userName}/${repoName}/pulls?page=${pageNumber}`
    )
    .then(response => response.data)
