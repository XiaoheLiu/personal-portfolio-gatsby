import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import Profile from "../components/Profile"
import Links from "../components/Links"
import AboutMe from "../components/AboutMe"

const IndexPage = () => (
  <Layout>
    <SEO title="About" keywords={[`gatsby`, `application`, `react`]} />
    <Profile size={200} />
    <Links />
    <AboutMe />
  </Layout>
)

export default IndexPage
