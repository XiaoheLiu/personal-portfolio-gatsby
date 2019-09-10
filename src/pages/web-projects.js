import React from "react"
import { Link } from "gatsby"
import Profile from "../components/Profile"
import Links from "../components/Links"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ProjectListFiltered from "../components/ProjectListFiltered"
import ProjectFilter from "../components/ProjectFilter"

const WebProjects = () => (
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
    <h4>I got interested in web development some time ago, especially in React.js and Django. Here are some fun web apps that I have built. </h4>
    <ProjectFilter/>
    <ProjectListFiltered fltr="web"/>
  </Layout>
)

export default WebProjects
