import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby'
import Seo from "../components/seo"
import Layout from '../components/layout';
import '../components/projects/projects.css';

const Project = ({ title, link, description, position, start, end }) => {
  console.log({title, link, res: `/project/${link ?? title?.toLowerCase()}`})
  return (
  <Link className='link' to={`/project/${link ?? title?.toLowerCase()}`}>
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
)}

const Projects = () => {
  const data = useStaticQuery(graphql`
query GetAllFrontmatter {
  allMarkdownRemark (sort: {fields: frontmatter___index, order: DESC}){
    nodes {
      frontmatter {
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