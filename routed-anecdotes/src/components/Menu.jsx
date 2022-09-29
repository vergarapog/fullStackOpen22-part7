import { Link } from "react-router-dom"

const Menu = () => {
  const padding = {
    paddingRight: 5,
  }
  return (
    <div>
      <Link to={"/"} style={{ padding: "1em" }}>
        Home
      </Link>
      <Link to={"/create"} style={{ padding: "1em" }}>
        Create
      </Link>
      <Link to={"/about"} style={{ padding: "1em" }}>
        About
      </Link>
    </div>
  )
}

export default Menu
