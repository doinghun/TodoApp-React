import axios from "axios"

const baseURL = process.env.SERVER_URL

export default axios.create({
  baseURL: baseURL
})
