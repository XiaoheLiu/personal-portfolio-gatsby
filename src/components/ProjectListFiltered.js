import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Project from "./Project"

const ProjectListFiltered = ({fltr}) => (
  <StaticQuery
    query={graphql`
      query {
        dataJson {
          projects {
            id
            type
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
      data.dataJson.projects.filter(p => p.type == fltr).map(project => (
        <Project project={project} key={project.id} />
      ))
    }
  />
)

export default ProjectListFiltered
