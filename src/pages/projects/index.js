import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby'
import Seo from "../../components/seo"
import Layout from '../../components/layout';
import '../../components/projects/projects.css';

const Project = ({ title, slug, description, position, start, end }) => (
  <Link className='link' to={slug}>
    <div className="project-container">
      <h1 className="title">{title}</h1>
      <p className="description">{description}</p>
      <div className="project-details">
        <p className="text">Position:</p>
        <p className="position">{position}</p>
        <p className="period-start">{start}</p>
        <p className="text"> - </p>
        <p className="period-end">{end ?? <i>Currently</i>}</p>
      </div>
    </div>
  </Link>
)

const Projects = () => {
  const data = useStaticQuery(graphql`
query GetAllFrontmatter {
  allMarkdownRemark (sort: {fields: frontmatter___index, order: DESC}, filter: {frontmatter: {type: {eq: "project"}}}){
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
    <Layout>
      <div className="container">
        {
          data?.allMarkdownRemark?.nodes.map(({ frontmatter: project }, key) => <Project key={key} {...project} />)
        }
      </div>
    </Layout>
  )
};



export const Head = () => <Seo title="Projects" />

export default Projects;
