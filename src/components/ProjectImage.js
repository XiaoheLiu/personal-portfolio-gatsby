import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const ProjectImage = ({ imgName, bigMode }) => (
  <StaticQuery
    query={graphql`
      query {
        allImageSharp {
          edges {
            node {
              fluid(maxWidth: 500) {
                ...GatsbyImageSharpFluid_tracedSVG
                originalName
              }
            }
          }
        }
      }
    `}
    render={data => {
      const image = data.allImageSharp.edges.find(
        edge => edge.node.fluid.originalName === imgName
      )
      if (!image) {
        return null
      }
      return (
        <Img
          fluid={image.node.fluid}
          style={{ width: bigMode ? "500px" : "200px" }}
        />
      )
    }}
  />
)
export default ProjectImage
