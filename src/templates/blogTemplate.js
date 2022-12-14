import { graphql } from "gatsby";
import React from "react";
import '../components/blog/blog.css';
import Layout from '../components/layout';
import Seo from '../components/seo';

export default function Template({ data }) {
  const { markdownRemark } = data ?? {}
  const { frontmatter, html } = markdownRemark ?? {};

  return (
    <Layout current="blog">
      <h1 className="blog-title">{frontmatter?.title}</h1>
      <h4 className="blog-date">{frontmatter?.date}</h4>
      <div
        className="blog-content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </Layout >
  )
}

export const Head = ({ data }) => {
  const { markdownRemark } = data ?? {}
  const { frontmatter } = markdownRemark ?? {};
  return <Seo title={frontmatter?.title ?? 'Blog'} description={frontmatter?.description} />
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        description
      }
    }
  }
`
