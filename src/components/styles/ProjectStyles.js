import styled from "styled-components"

const ProjectStyles = styled.div`
  padding: 20px 0 20px 0;
  border-top: 1px solid ${props => props.theme.offWhite};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  .image {
    display: flex;
    flex-direction: column;
    .gatsby-image-wrapper {
      margin-bottom: 20px;
      box-shadow: ${props => props.theme.bs};
    }
  }
  &.hover-effect:hover {
    box-shadow: ${props => props.theme.bs};
  }

  .text {
    max-width: 450px;
    padding-left: 10px;
    .title {
      text-decoration: none;
      color: ${props => props.theme.black};

      h3 {
        font-weight: 700;
        font-size: 2rem;
      }
    }

    em {
      font-size: 1.3rem;
      color: white;
      background-color: ${props => props.theme.teal};
      margin-right: 3px;
      padding: 2px 3px;
    }

    .meta {
      margin-top: 10px;
      display: flex;
      justify-content: flex-end;
      a {
        color: ${props => props.theme.black};
        text-decoration: none;
        border: 1px solid ${props => props.theme.black};
        border-radius: 3px;
        padding: 2px 4px;
        margin-left: 5px;
      }
    }
  }
`
export default ProjectStyles
