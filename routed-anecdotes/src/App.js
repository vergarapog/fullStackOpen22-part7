import { useState } from "react"
import { Route, Routes } from "react-router-dom"
import { useMatch } from "react-router-dom"
import { useNavigate } from "react-router-dom"

import AnecdoteList from "./components/AnecdoteList"
import Menu from "./components/Menu"
import Create from "./pages/Create"
import About from "./pages/About"
import Footer from "./components/Footer"
import SingleAnecdote from "./pages/SingleAnecdote"
const App = () => {
  const [anecdotes, setAnecdotes] = useState([
    {
      content: "If it hurts, do it more often",
      author: "Jez Humble",
      info: "https://martinfowler.com/bliki/FrequencyReducesDifficulty.html",
      votes: 0,
      id: 1,
    },
    {
      content: "Premature optimization is the root of all evil",
      author: "Donald Knuth",
      info: "http://wiki.c2.com/?PrematureOptimization",
      votes: 0,
      id: 2,
    },
  ])

  const [notification, setNotification] = useState("")

  const navigate = useNavigate()
  const match = useMatch("/:id")
  const anecdote = match
    ? anecdotes.find((i) => i.id === Number(match.params.id))
    : null

  const addNew = (anecdote) => {
    anecdote.id = Math.round(Math.random() * 10000)
    setAnecdotes(anecdotes.concat(anecdote))
    navigate("/")
    setNotification(`a new anecdote title "${anecdote.content}" created!`)
    setTimeout(() => {
      setNotification("")
    }, 2000)
  }

  const anecdoteById = (id) => anecdotes.find((a) => a.id === id)

  const vote = (id) => {
    const anecdote = anecdoteById(id)

    const voted = {
      ...anecdote,
      votes: anecdote.votes + 1,
    }

    setAnecdotes(anecdotes.map((a) => (a.id === id ? voted : a)))
  }

  return (
    <div>
      <h1>Software anecdotes</h1>
      <Menu />
      {notification === "" ? "" : <p>{notification}</p>}
      <Routes>
        <Route path="/:id" element={<SingleAnecdote anecdote={anecdote} />} />
        <Route path="/" element={<AnecdoteList anecdotes={anecdotes} />} />
        <Route path="/create" element={<Create addNew={addNew} />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
