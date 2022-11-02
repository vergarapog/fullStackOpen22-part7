import axios from "axios"
const baseUrl = "http://localhost:3003/api/blogs"

let token = null
const setToken = (newToken) => {
  token = `bearer ${newToken}`
}

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const create = async (blogPost) => {
  const config = {
    headers: { Authorization: token },
  }
  const response = await axios.post(baseUrl, blogPost, config)

  return response.data
}

const update = async (id, updatedBlogPost) => {
  const response = await axios.put(`${baseUrl}/${id}`, updatedBlogPost)
  return response.data
}

const destroy = async (id) => {
  const config = {
    headers: { Authorization: token },
  }
  const response = await axios.delete(`${baseUrl}/${id}`, config)

  return response.data
}

const submitComment = async (id, blogPost) => {
  const response = await axios.post(`${baseUrl}/${id}/comments`, blogPost)

  return response.data
}

export default { getAll, create, setToken, update, destroy, submitComment }
