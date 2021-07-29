import { BASE_URL } from "../constants"
import { User } from "../models/_users"
import { Repo } from "../models/_repos"

const getUserProfile = async (username: string) => {
  try {
    const response = await fetch(BASE_URL + `/${username}`);
    if (!response.ok) {
      throw new Error('failed to fetch data');
      return;
    } 

    return response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}

const getUserRepositories = async (username: string, page: number)  => {
  try {
    const response = await fetch(BASE_URL + `/${username}/repos?per_page=20&page=${page}`)
    if (!response.ok) {
      throw new Error('Failed')
      return;
    }

    return response.json()
  } catch (error) {
    console.error(error)
    return null
  }
}

export { getUserProfile, getUserRepositories }