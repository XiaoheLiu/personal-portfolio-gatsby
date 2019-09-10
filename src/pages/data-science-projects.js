import React from "react"
import { Link } from "gatsby"
import Profile from "../components/Profile"
import Links from "../components/Links"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ProjectListFiltered from "../components/ProjectListFiltered"
import ProjectFilter from "../components/ProjectFilter"

const DataScienceProjects = () => (
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
    <h4>I enjoy working with data - from visualizing experimental data to training machine learning algorithms. Here are some of my data science projects.</h4>
    <ProjectFilter/>
    <ProjectListFiltered fltr="ds"/>
  </Layout>
)

export default DataScienceProjects
