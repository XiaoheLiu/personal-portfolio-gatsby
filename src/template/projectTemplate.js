import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import ProjectModal from "../components/ProjectModal"

const ProjectTemplate = props => {
  const { project } = props.pageContext

  return (
    <Layout>
      <SEO title="Project" />
      <ProjectModal project={project} />
    </Layout>
  )
}

export default ProjectTemplate
