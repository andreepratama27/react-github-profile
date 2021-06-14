import { BASE_URL } from "../constants"
import { User } from "../models/_users"

const getUserProfile = (username: string): Promise<User> => {
  return fetch(BASE_URL + `/${username}`).then(resp => resp.json())
}

const getUserRepositories = (username: string): Promise<void> => {
  return fetch(BASE_URL + `/${username}/repos`).then(resp => resp.json())
}

export { getUserProfile, getUserRepositories }