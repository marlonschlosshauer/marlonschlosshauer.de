import { graphql } from "gatsby";
import React from "react";
import Layout from '../components/layout';
import '../components/projects/project.css';
import Seo from '../components/seo';

export default function Template({ data }) {
  const { markdownRemark } = data ?? {}
  const { frontmatter, html } = markdownRemark ?? {};

  return (
    <Layout current="projects">
      <h1 className="project-index-title">{frontmatter?.title}</h1>
      <p className="project-index-description">{frontmatter?.description}</p>
      <div className="project-index-position-details">
        <p className="project-index-text">Position: </p>
        <p className="project-index-position">{frontmatter?.position}</p>
      </div>
      <div className="project-index-period-details">
        <p className="project-index-start">{frontmatter?.start}</p>
        <p className="project-index-divider">{` - `}</p>
        <p className="project-index-end">{frontmatter?.end}</p>
      </div>
      <div
        className="project-index-content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </Layout >
  )
}

export const Head = ({ data }) => {
  const { markdownRemark } = data ?? {}
  const { frontmatter } = markdownRemark ?? {};
  return <Seo title={frontmatter?.title ?? 'Blog'} description={frontmatter?.description ?? ''} />
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
        position
        start
        end
      }
    }
  }
`
