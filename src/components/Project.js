import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { IoLogoGithub, IoMdOpen } from "react-icons/io"
import ProjectImage from "./ProjectImage"
import ProjectStyles from "./styles/ProjectStyles"

const Project = ({ project }) => {
  return (
    <ProjectStyles>
      <Link
        to={`/projects/${project.title}`}
        state={{
          modal: true,
        }}
        className="image"
      >
        <ProjectImage imgName={project.image} bigMode={false} />
      </Link>

      <div className="text">
        <Link
          to={`/projects/${project.title}`}
          state={{
            modal: true,
          }}
          className="title"
        >
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </Link>

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
