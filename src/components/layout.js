import React from "react"
import PropTypes from "prop-types"
import styled, { ThemeProvider, createGlobalStyle } from "styled-components"
import { ModalRoutingContext } from "gatsby-plugin-modal-routing"
import { Link } from "gatsby"
import Header from "./header"

const theme = {
  teal: "#00ABA9",
  black: "#393939",
  offWhite: "#DDD",
  lightgrey: "#555",
  maxWidth: "1000px",
  bs: "0 12px 24px 0 rgba(0, 0, 0, 0.09)",
}

const GlobalStyles = createGlobalStyle`

  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.6rem;
    line-height: 1.5;
    font-family: "Trebuchet MS", Geneva, sans-serif;
  }
  a {
    color: ${theme.teal};
    font-weight:500;
  }
`

const Footer = styled.footer`
  display: block;
  width: 100vw;
  color: ${props => props.theme.black};
  text-align: center;
  font-size: 1.4rem;
`

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <div>
      <GlobalStyles />
      <ModalRoutingContext>
        {({ modal, closeTo }) => (
          <div
            style={{
              margin: "0 auto",
              maxWidth: "700px",
              width: "90%",
              padding: `0px 1.0875rem 1.45rem`,
              paddingTop: 0,
            }}
          >
            {modal ? <Link to={closeTo}>Close</Link> : <Header />}
            <main>{children}</main>
          </div>
        )}
      </ModalRoutingContext>

      <Footer>
        <p>~~~</p>© {new Date().getFullYear()}, Built with 💚 by{" "}
        <span> Athena Liu</span>
      </Footer>
    </div>
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
