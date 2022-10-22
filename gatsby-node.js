exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  // Project section
  const projectPostTemplate = require.resolve(`./src/templates/projectTemplate.js`)

  const projectPages = graphql(`
    {
      allMarkdownRemark(
        filter: {frontmatter:{ type: {eq: "project"}}}
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
  });

  // Blog section

  const blogPostTemplate = require.resolve(`./src/templates/blogTemplate.js`)

  const blogPages = graphql(`
    {
      allMarkdownRemark(
        filter: {frontmatter:{ type: {eq: "blog"}}}
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
        component: blogPostTemplate,
        context: {
          // additional data can be passed via context
          slug: node.frontmatter.slug,
          id: node.id,
        },
      })
    })
  });

  return Promise.all([projectPages, blogPages]);
}
