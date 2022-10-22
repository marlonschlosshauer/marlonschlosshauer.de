import { graphql } from "gatsby";
import React, { useEffect } from "react";
import Layout from '../components/layout';
import '../components/blog/blog.css';

export default function Template({
  data,
}) {
  const { markdownRemark } = data ?? {}
  const { frontmatter, html } = markdownRemark ?? {};
  useEffect(() => {
    document.title = frontmatter?.title ?? 'Blog';
  }, []);
  return (
    <Layout>
      <div className="content">
        <h1 className="blog-title">{frontmatter?.title}</h1>
        <h4 className="blog-date">{frontmatter?.date}</h4>
        <div
          className="blog-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </Layout >
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
