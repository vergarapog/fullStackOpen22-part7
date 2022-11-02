import { useState } from "react"
import { setNotification } from "../../reducers/notifReducer"
import { useDispatch } from "react-redux"
import { addBlogRedux } from "../../reducers/blogReducer"
import { getAllUsers } from "../../reducers/usersReducer"

const BlogForm = () => {
  const dispatch = useDispatch()

  //blog form data state
  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")
  const [url, setUrl] = useState("")

  const handleAddBlog = (e) => {
    e.preventDefault()
    createBlog({ title, author, url })
  }

  const createBlog = async (newBlog) => {
    try {
      await dispatch(addBlogRedux(newBlog))

      dispatch(
        setNotification({
          message: `${newBlog.title} by  ${newBlog.author} successfully added`,
          time: 3,
        })
      )
      await dispatch(getAllUsers())

      // addBlogRef.current.toggleVisibility()
    } catch (error) {
      dispatch(
        setNotification({
          message: "Adding Failed Please try again",
          type: "error",
          time: 3,
        })
      )
    }
  }

  return (
    <div>
      <form onSubmit={handleAddBlog}>
        <div>
          <label htmlFor="title">title:</label>
          <input
            placeholder="title"
            className="border"
            type="text"
            id="title"
            value={title}
            onChange={({ target }) => {
              setTitle(target.value)
            }}
          />
        </div>
        <div>
          <label htmlFor="author">author:</label>
          <input
            placeholder="author"
            className="border"
            type="text"
            name=""
            id="author"
            value={author}
            onChange={({ target }) => {
              setAuthor(target.value)
            }}
          />
        </div>
        <div>
          <label htmlFor="url">url:</label>
          <input
            placeholder="url"
            className="border"
            type="text"
            name=""
            id="url"
            value={url}
            onChange={({ target }) => {
              setUrl(target.value)
            }}
          />
        </div>
        <button
          type="submit"
          className="rounded py-1 px-2 bg-slate-600 text-white"
          id="createBlog"
        >
          Create
        </button>
      </form>
    </div>
  )
}

export default BlogForm
