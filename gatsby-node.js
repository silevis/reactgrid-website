const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
// const { fmImagesToRelative } = require('gatsby-remark-relative-images');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post.tsx`)
  const docsPost = path.resolve(`./src/templates/docs-post.js`)
  const blogRoute = "/blog"
  const docsRoute = "/docs"
  const result = await graphql(
    `
      {
        allMdx {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                posttype
              }
            }
          }
        }
      }
    `
  )


  if (result.errors)
    throw result.errors

  // Create blog posts pages.
  const posts = result.data.allMdx.edges

  posts.forEach((post, index) => {
    if (post.node.frontmatter.posttype === 'docs') {
      createPage({
        path: docsRoute + post.node.fields.slug,
        component: docsPost,
        context: {
          slug: post.node.fields.slug,
        },
      })
    } else {
      createPage({
        path: blogRoute + post.node.fields.slug,
        component: blogPost,
        context: {
          slug: post.node.fields.slug,
        },
      })
    }
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  // fmImagesToRelative(node);  // TODO FIX dla obrazow 
  const { createNodeField } = actions
  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })

    createNodeField({
      name: "id",
      node,
      value: node.id
    });
  }
}
