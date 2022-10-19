import { graphql } from "gatsby";
import React from "react";
import Layout from '../components/layout';

export default function Template({
  data,
}) {
  const { markdownRemark } = data ?? {}
  const { frontmatter, html } = markdownRemark ?? {};
  return (
    <Layout>
      <div className="project-post-container">
        <div className="project-post">
          <h1>{frontmatter?.title}</h1>
          <h2>{frontmatter?.date}</h2>
          <div
            className="project-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`
