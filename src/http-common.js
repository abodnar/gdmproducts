import Axios from 'axios'

export const HTTP = Axios.create({
  baseURL: process.env.API_URL,
  headers: {
    Authorization: 'Bearer ' + process.env.API_TOKEN
  }
})
