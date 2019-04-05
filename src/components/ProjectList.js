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
            image
            github
            demo
          }
        }
      }
    `}
    render={data =>
      data.dataJson.projects.map(project => (
        <Project project={project} bigMode={false} key={project.title} />
      ))
    }
  />
)

export default ProjectList
