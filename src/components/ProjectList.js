import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Project from "./Project"

const ProjectList = () => (
  <StaticQuery
    query={graphql`
      query {
        dataJson {
          projects {
            title
            description
            stacks
            images
            github
            demo
          }
        }
      }
    `}
    render={data =>
      data.dataJson.projects.map(project => (
        <Project project={project} key={project.title} />
      ))
    }
  />
)

export default ProjectList
