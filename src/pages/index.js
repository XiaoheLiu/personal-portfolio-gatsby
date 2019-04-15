import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Profile from "../components/Profile"
import Links from "../components/Links"
import AboutMe from "../components/AboutMe"

const IndexPage = () => (
  <Layout>
    <SEO title="About" />
    <Profile size={250} />
    <Links />
    <AboutMe />
  </Layout>
)

export default IndexPage
