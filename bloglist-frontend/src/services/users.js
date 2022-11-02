import axios from "axios"
const baseUrl = "http://localhost:3003/api/users"

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

// const create = async (blogPost) => {
//   const config = {
//     headers: { Authorization: token },
//   }
//   const response = await axios.post(baseUrl, blogPost, config)

//   return response.data
// }

// const update = async (id, updatedBlogPost) => {
//   console.log(`${baseUrl}/${id}`)
//   const response = await axios.put(`${baseUrl}/${id}`, updatedBlogPost)
//   return response.data
// }

// const destroy = async (id) => {
//   const config = {
//     headers: { Authorization: token },
//   }
//   const response = await axios.delete(`${baseUrl}/${id}`, config)

//   return response.data
// }

export default { getAll }
