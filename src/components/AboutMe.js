import React from "react"
import links from "../data/links"

const AboutMe = () => {
  return (
    <div className="ten wide column" id="rightColumn">
      <p>
        Hi, I'm Athena (Xiaohe) Liu! I'm a <strong>PhD candidate in applied science </strong> and an amateur <strong>data scientist / machine learning engineer</strong> based in Vancouver, Canada.
      </p>
      <p>
        I am currently working towards my doctorial degree{" "}
        <span role="img" aria-label="academic-cap">
          🎓
        </span>{" "}
        in Fluid Dynamics in the{" "}
        <a target="_blank" rel="noopener noreferrer" href={links.ubcfluid}>
          University of British Columbia
        </a>
        . My research tries to understand the physics of high
        speed liquid jet impingement, using a mixed approach of computational simulation, theoretical modeling and experimental method.
      </p>
      <p>
        Apart from my studies in fluids, I also enjoy working with data - from visualizing experimental data to training deep learning algorithms for generating predictions. Since 2018, I have been working as teaching assistant for "MECH305: Data Analysis and Statistics" at UBC, creating and teaching tutorials for 3rd year undergrads on the subject of statistics and machine learning with MATLAB and python.
      </p>
      <p>
        In my free time, I enjoy cuddling with my cats{" "}
        <span role="img" aria-label="cats">
          🐱
        </span>
        ,{" "}
        <a target="_blank" rel="noopener noreferrer" href={links.vikkivance}>
          Vikki and Vance
        </a>
        , making{" "}
        <a target="_blank" rel="noopener noreferrer" href={links.origami}>
          origami
        </a>{" "}
        and baking/cooking 🥐 - checkout{" "}
        <a target="_blank" rel="noopener noreferrer" href={links.recipes}>
          my family recipe collections
        </a>
        . I am also a <a target="_blank" href="https://www.academieduello.com/news-blog/what-are-the-duello-rank-levels/"> historical fencing practitioner </a> at the Scholar level.
      </p>{" "}
      <p>
        Feel free to <a href={links.mailto}>email me</a> if you would like to
        collaborate on a project, or to learn more about me.
      </p>
    </div>
  )
}

export default AboutMe
