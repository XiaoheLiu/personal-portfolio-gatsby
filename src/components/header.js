import React from "react"
import { Link } from "gatsby"
import HeaderStyles from "./styles/HeaderStyles"

class Header extends React.Component {
  render() {
    return (
      <HeaderStyles>
        <h1>Athena Liu</h1>
        <nav>
          <Link to="/" activeClassName="active">
            About
          </Link>
          <Link to="/projects" activeClassName="active">
            Projects
          </Link>
        </nav>
      </HeaderStyles>
    )
  }
}

export default Header
