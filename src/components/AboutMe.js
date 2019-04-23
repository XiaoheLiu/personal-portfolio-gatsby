import React from "react"
import links from "../data/links"

const AboutMe = () => {
  return (
    <div className="ten wide column" id="rightColumn">
      <p>
        Hi, I'm Athena (Xiaohe) Liu! I'm a <strong>PhD student</strong> and a{" "}
        <strong>full stack developer</strong> based in Vancouver, Canada.
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
        . My research is on the computational and theoretical modeling of high
        speed liquid jet impingement.
      </p>
      <p>
        I also have a passion for the latest web technology{" "}
        <span role="img" aria-label="coding">
          💻
        </span>{" "}
        , and am always striving to learn and improve my programming skills by
        doing fun projects to make people's life better. My current focus is on
        Django and ReactJS, which I used to build this portfolio (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/XiaoheLiu/personal-portfolio-gatsby"
        >
          check out the code
        </a>
        )!{" "}
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
        . I also love cooking at home 🥐🍳 - checkout{" "}
        <a target="_blank" rel="noopener noreferrer" href={links.recipes}>
          my family recipe collections
        </a>
        .
      </p>{" "}
      <p>
        Feel free to <a href={links.mailto}>email me</a> if you would like to
        collaborate on a project, or learn more about me.
      </p>
    </div>
  )
}

export default AboutMe
