exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const projectPostTemplate = require.resolve(`./src/templates/projectTemplate.js`)

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
id
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    return result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.slug,
        component: projectPostTemplate,
        context: {
          // additional data can be passed via context
          slug: node.frontmatter.slug,
          id: node.id,
        },
      })
    })
  })
}
