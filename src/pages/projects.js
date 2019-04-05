import React from "react"
import Profile from "../components/Profile"
import Links from "../components/Links"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ProjectList from "../components/ProjectList"

const Projects = () => (
  <Layout>
    <SEO title="Projects" />
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
      }}
    >
      <div>
        <Profile size={100} />
      </div>
      <Links />
    </div>
    <p>Here are some fun projects that I have built:</p>
    <ProjectList />
  </Layout>
)

export default Projects
