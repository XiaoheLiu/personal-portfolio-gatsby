import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const StyledImg = styled(Img)`
  display: block;
  border-radius: 50%;
  width: ${props => props.size}px;
  margin: 0 auto;
`

const Profile = ({ size }) => {
  return (
    <StaticQuery
      query={graphql`
        query {
          profileImage: file(relativePath: { eq: "AthenaProfilePic.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => (
        <StyledImg
          fluid={data.profileImage.childImageSharp.fluid}
          size={size}
        />
      )}
    />
  )
}

Profile.propTypes = {
  size: PropTypes.number.isRequired,
}

export default Profile
