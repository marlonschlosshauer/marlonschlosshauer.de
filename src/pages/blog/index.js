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
      <div className="content">
        {
          data
            ?.allMarkdownRemark
            ?.nodes
            .map(({ frontmatter: blog }, key) => (
              <Post key={key} {...blog} />
            ))
        }
      </div>
    </Layout>
  )
};

export const Head = () => <Seo title="Blog" />

export default Blog;
