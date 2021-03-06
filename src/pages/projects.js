import React from "react"
import { Link } from "gatsby"
import Profile from "../components/Profile"
import Links from "../components/Links"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ProjectList from "../components/ProjectList"
import ProjectFilter from "../components/ProjectFilter"

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
    <h4> I do a variety of projects out of curiosity of reasons behind the data, and my passion for programming. Here are just a few interesting ones. </h4>
    <ProjectFilter/>
    <ProjectList />
  </Layout>
)

export default Projects
