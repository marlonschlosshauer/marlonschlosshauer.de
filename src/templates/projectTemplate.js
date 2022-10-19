import { graphql } from "gatsby";
import React, { useEffect } from "react";
import Layout from '../components/layout';
import '../components/projects/project.css';

export default function Template({
  data,
}) {
  const { markdownRemark } = data ?? {}
  const { frontmatter, html } = markdownRemark ?? {};
  useEffect(() => {
    document.title = frontmatter?.title ?? 'Project';
  }, []);
  return (
    <Layout>
      <div className="project-post-container">
        <div className="project-post">
          <h1 className="project-title">{frontmatter?.title}</h1>
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
