import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import '../../components/blog/index.css';
import { Post } from '../../components/blog/post';
import Layout from '../../components/layout';
import Seo from "../../components/seo";

const Blog = () => {
  const data = useStaticQuery(graphql`
query GetAllBlogFrontmatter {
  allMarkdownRemark (sort: {fields: frontmatter___date, order: DESC}, filter: {frontmatter: {type: {eq: "blog"}}}){
    nodes {
      frontmatter {
        slug
        title
        description
        date
      }
    }
  }
}`)

  return (
    <Layout current={'blog'}>
      {
        data
          ?.allMarkdownRemark
          ?.nodes
          .map(({ frontmatter: blog }, key) => (
            <Post key={key} {...blog} />
          ))
      }
    </Layout>
  )
};

export const Head = () => <Seo title="Blog" description='' />

export default Blog;
