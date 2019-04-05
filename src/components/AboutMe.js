import React from "react"
import links from "../data/links"

const AboutMe = () => {
  return (
    <div className="ten wide column" id="rightColumn">
      <p>
        Hi, I'm Athena Liu! I'm a <strong>PhD student</strong> and a{" "}
        <strong>web developer</strong> based in Vancouver, Canada.
      </p>
      <p>
        I am currently working towards my doctorial degree{" "}
        <span role="img" aria-label="academic-cap">
          🎓
        </span>{" "}
        in Fluid Mechanics in the{" "}
        <a target="_blank" rel="noopener noreferrer" href={links.ubcfluid}>
          University of British Columbia
        </a>
        .{" "}
      </p>
      <p>
        I have a passion for the latest web technology{" "}
        <span role="img" aria-label="coding">
          💻
        </span>{" "}
        , and am always striving to learn and improve my skills by doing fun
        projects as a hobbyist and as a freelancing developer. My current focus
        is on ReactJS, which I used to build this site!{" "}
      </p>
      <p>
        In my free time, I enjoy cuddling with my cats{" "}
        <span role="img" aria-label="cats">
          🐱🐱
        </span>
        ,{" "}
        <a target="_blank" rel="noopener noreferrer" href={links.vikkivance}>
          Vikki and Vance
        </a>
        , making{" "}
        <a target="_blank" rel="noopener noreferrer" href={links.origami}>
          origami
        </a>{" "}
        and{" "}
        <a target="_blank" rel="noopener noreferrer" href={links.stampcarving}>
          stamp carving
        </a>
        . I am also training to get my blue cord in historical rapier fencing{" "}
        <span role="img" aria-label="sword">
          ⚔{" "}
        </span>
        this year.
      </p>{" "}
      <p>
        Feel free to <a href={links.mailto}>email me</a> if you would like to
        collaborate on a project, or learn more about me.
      </p>
    </div>
  )
}

export default AboutMe
