import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import '../../components/projects/index.css';
import { Post } from '../../components/projects/post';
import Layout from '../../components/layout';
import Seo from "../../components/seo";

const Projects = () => {
  const data = useStaticQuery(graphql`
query GetAllProjectFrontmatter {
  allMarkdownRemark (sort: {fields: frontmatter___end, order: DESC}, filter: {frontmatter: {type: {eq: "project"}}}){
    nodes {
      frontmatter {
        slug
        title
        description
        position
        start
        end
      }
    }
  }
}
`)

  return (
    <Layout current={'projects'}>
      {
        data
          ?.allMarkdownRemark
          ?.nodes
          .map(({ frontmatter: project }, key) => (
            <Post key={key} {...project} />
          ))
      }
    </Layout>
  )
};

export const Head = () => <Seo title="Projects" />

export default Projects;
