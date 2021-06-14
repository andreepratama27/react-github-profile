import { BASE_URL } from "../constants"
import { User } from "../models/_users"
import { Repo } from "../models/_repos"

const getUserProfile = (username: string): Promise<User> => {
  return fetch(BASE_URL + `/${username}`).then(resp => resp.json())
}

const getUserRepositories = (username: string): Promise<Repo[]> => {
  return fetch(BASE_URL + `/${username}/repos?per_page=20`).then(resp => resp.json())
}

export { getUserProfile, getUserRepositories }