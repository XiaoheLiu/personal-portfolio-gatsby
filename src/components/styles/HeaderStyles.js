import styled from "styled-components"

const HeaderStyles = styled.header`
  margin-top: 10vh;
  margin-bottom: 5vh;
  padding-left: 5vw;
  padding-bottom: 10px;
  border-bottom: 1px solid ${props => props.theme.offWhite};
  text-transform: uppercase;
  font-family: Verdana, Geneva, sans-serif;
  display: grid;
  grid-template-columns: auto 1fr;
  justify-content: space-between;
  align-items: center;
  @media (max-width: ${props => props.theme.maxWidth}) {
    grid-template-columns: 1fr;
    justify-content: center;
  }

  nav {
    display: flex;
    justify-self: end;
    align-items: center;
    .active {
      color: ${props => props.theme.teal};
    }

    a {
      color: ${props => props.theme.lightgrey};
      font-weight: 600;
      text-decoration: none;
      padding: 1rem 3rem;
      display: flex;
      align-items: center;
      position: relative;
      font-size: 1em;
      background: none;
      border: 0;
      cursor: pointer;
      @media (max-width: 500px) {
        font-size: 10px;
        padding: 0 10px;
      }
      &:before {
        content: "";
        width: 2px;
        background: ${props => props.theme.lightgrey};
        height: 60%;
        left: 0;
        position: absolute;
        top: 15%;
        bottom: 0;
        transform: skew(-10deg);
      }
      &:after {
        height: 2px;
        background: teal;
        content: "";
        width: 0;
        position: absolute;
        transform: translateX(-50%);
        transition: width 0.4s;
        transition-timing-function: cubic-bezier(1, -0.65, 0, 2.31);
        left: 50%;
        margin-top: 2rem;
      }
      &:hover,
      &:focus {
        outline: none;
        &:after {
          width: calc(100% - 60px);
        }
      }
    }
  }
`

export default HeaderStyles
