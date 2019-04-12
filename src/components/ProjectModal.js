import React from "react"
import PropTypes from "prop-types"
import { IoLogoGithub, IoMdOpen } from "react-icons/io"
import ProjectImage from "./ProjectImage"
import ProjectStyles from "./styles/ProjectStyles"

const Project = ({ project }) => {
  return (
    <ProjectStyles className="modal">
      <div className="text">
        <h2>{project.title}</h2>
      </div>
      <div className="image">
        {project.images.map(image => (
          <ProjectImage imgName={image} bigMode={true} key={image} />
        ))}
      </div>
      <div className="text">
        <p>{project.description}</p>
        <div>
          {project.stacks.map(t => (
            <em key={`${project.title}-${t}`}>{t}</em>
          ))}
        </div>
        <div className="meta">
          <a href={project.github}>
            {" "}
            <IoLogoGithub /> Code
          </a>
          <a href={project.demo}>
            <IoMdOpen />
            Live
          </a>
        </div>
      </div>
    </ProjectStyles>
  )
}

Project.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    stacks: PropTypes.arrayOf(String),
    github: PropTypes.string,
    demo: PropTypes.string,
    images: PropTypes.arrayOf(String),
  }),
}

export default Project
