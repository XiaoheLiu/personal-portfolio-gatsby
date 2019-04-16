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
  &:hover {
    transform: scale(1.05);
  }
  transition: all 0.3s;
`

const StyledIcon = styled.a`
  transition: all 0.3s;
  &:hover {
    transform: scale(1.1);
  }
`

const Links = () => {
  return (
    <LinkStyles>
      <StyledButton
        className="ui teal basic button"
        target="_blank"
        href={links.resume}
      >
        Resumé
      </StyledButton>
      <div className="icons">
        <StyledIcon
          target="_blank"
          rel="noopener noreferrer"
          href={links.linkedin}
        >
          <IoLogoLinkedin />
        </StyledIcon>
        <StyledIcon
          target="_blank"
          rel="noopener noreferrer"
          href={links.github}
        >
          <IoLogoGithub />{" "}
        </StyledIcon>
        <StyledIcon href={links.mailto}>
          <IoIosMail />
        </StyledIcon>

        <StyledIcon
          target="_blank"
          rel="noopener noreferrer"
          href={links.instagram}
        >
          <IoLogoInstagram />
        </StyledIcon>
        <StyledIcon
          target="_blank"
          rel="noopener noreferrer"
          href={links.facebook}
        >
          <IoLogoFacebook />
        </StyledIcon>
      </div>
    </LinkStyles>
  )
}

export default Links
