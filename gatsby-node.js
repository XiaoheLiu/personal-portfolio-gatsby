const path = require("path")
const data = require("./src/data/projects.json")

exports.createPages = ({ actions }) => {
  const { createPage } = actions

  // Your component that should be rendered for every item in JSON.
  const template = path.resolve(`src/template/projectTemplate.js`)

  // Create pages for each JSON entry.
  data.projects.forEach(project => {
    createPage({
      path: `projects/${project.id}`,
      component: template,

      // Send additional data to page from JSON (or query inside template)
      context: {
        project,
      },
    })
  })
}
