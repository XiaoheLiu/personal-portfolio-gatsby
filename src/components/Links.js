import React from "react"
import styled from "styled-components"
import {
  IoLogoLinkedin,
  IoLogoGithub,
  IoIosMail,
  IoLogoInstagram,
  IoLogoFacebook,
} from "react-icons/io"
import links from "../data/links"
import LinkStyles from "./styles/LinkStyles"

const StyledButton = styled.a`
  color: ${props => props.theme.teal};
  text-decoration: none;
  font-weight: 300;
  border: 1px solid ${props => props.theme.teal};
  border-radius: 5px;
  font-size: 1.4rem;
  padding: 0.5rem 1.5rem;
  display: inline-block;
`

const Links = () => {
  return (
    <LinkStyles>
      <StyledButton className="ui teal basic button" target="_blank">
        Resumé
      </StyledButton>
      <div className="icons">
        <a target="_blank" rel="noopener noreferrer" href={links.linkedin}>
          <IoLogoLinkedin />
        </a>
        <a target="_blank" rel="noopener noreferrer" href={links.github}>
          <IoLogoGithub />{" "}
        </a>
        <a href={links.mailto}>
          <IoIosMail />
        </a>

        <a target="_blank" rel="noopener noreferrer" href={links.instagram}>
          <IoLogoInstagram />
        </a>
        <a target="_blank" rel="noopener noreferrer" href={links.facebook}>
          <IoLogoFacebook />
        </a>
      </div>
    </LinkStyles>
  )
}

export default Links
