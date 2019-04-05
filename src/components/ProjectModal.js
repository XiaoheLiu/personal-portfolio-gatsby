import React from "react"
import PropTypes from "prop-types"
import { IoLogoGithub, IoMdOpen } from "react-icons/io"
import ProjectImage from "./ProjectImage"
import ProjectStyles from "./styles/ProjectStyles"

const Project = ({ project }) => {
  return (
    <ProjectStyles className="modal">
      <div className="image">
        <ProjectImage imgName={project.image} bigMode={true} />
      </div>
      <div className="text">
        <h2>{project.title}</h2>
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
  }),
}

export default Project
