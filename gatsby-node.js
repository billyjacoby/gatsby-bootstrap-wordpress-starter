/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const pageTemplate = path.resolve(`src/templates/pageTemplate.js`)
    resolve(
      graphql(
        `
          {
            allWordpressPage {
              edges {
                node {
                  id
                  slug
                  title
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          reject(result.errors)
        }

        result.data.allWordpressPage.edges.forEach(node => {
          createPage({
            path: node.node.slug,
            component: pageTemplate,
            context: {
              id: node.node.id,
            },
          })
        })
      })
    )
  })
}
