import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby'
import Seo from "../../components/seo"
import Layout from '../../components/layout';
import '../../components/blog/index.css';

const Post = ({ slug, title, description }) => (
  <Link className='link' to={slug}>
    <div className="blog-container">
      <h1 className="title">{title}</h1>
      <p className="description">{description}</p>
    </div>
  </Link>
)

const Blog = () => {
  const data = useStaticQuery(graphql`
query GetAllFrontmatter {
  allMarkdownRemark (
    sort: {fields: frontmatter___index, order: DESC}
    filter: {frontmatter: {type: {eq: "blog"}}}){
    nodes {
      frontmatter {
        slug
        title
        description
      }
    }
  }
}`)

  return (
    <Layout>
      <div className="container">
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
