import React from "react"
import { Link } from "gatsby"
import LinkStyles from "./styles/LinkStyles"
import styled from 'styled-components'

const ProjectFilterStyles = styled.div`
a {
  color: ${props => props.theme.black};
}
.active{
  font-weight: bolder;
  color: ${props => props.theme.teal};
}

`

const ProjectFilter = () => (
    <ProjectFilterStyles>
    <div className="icons">
      Filter projects: 
      &nbsp; 
      <Link to="/data-science-projects" activeClassName="active">
            Data Science
      </Link> 
      &nbsp; | &nbsp; 
      <Link to="/web-projects" activeClassName="active">
            Web
      </Link>
      &nbsp; | &nbsp; 
      <Link to="/projects" activeClassName="active">
            All
      </Link>
      </div>
    </ProjectFilterStyles>
)

export default ProjectFilter
