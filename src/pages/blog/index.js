import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';
import '../../components/blog/index.css';
import Layout from '../../components/layout';
import Seo from "../../components/seo";

const Post = ({ slug, title, description, date }) => (
  <Link className='link' to={slug}>
    <div className="blog-container">
      <h1 className="title">{title}</h1>
      <p className="date">{date}</p>
      <p className="description">{description}</p>
    </div>
  </Link>
)

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
            .map(({ frontmatter: blog }, key) => <Post key={key} {...blog} />)
        }
      </div>
    </Layout>
  )
};

export const Head = () => <Seo title="Blog" />

export default Blog;
