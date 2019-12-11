import axios from "axios"

const baseURL = "http://localhost:5000" || process.env.SERVER_URL

export default axios.create({
  baseURL: baseURL
})
