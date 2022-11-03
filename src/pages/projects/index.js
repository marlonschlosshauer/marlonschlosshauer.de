import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Layout } from '../../components/layout';
import '../../components/projects/index.css';
import { Post } from '../../components/projects/post';
import { Seo } from "../../components/seo";

export const Projects = () => {
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

export const Head = () => <Seo title="Projects" description='' />

export default Projects;
