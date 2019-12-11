import axios from "axios"
const port = process.env.PORT || 5000
const baseURL = `http://localhost:${port}`

export default axios.create({
  baseURL: baseURL
})
