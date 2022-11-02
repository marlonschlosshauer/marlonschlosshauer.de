import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby'
import Seo from "../../components/seo"
import Layout from '../../components/layout';
import '../../components/projects/projects.css';
import '../../components/projects/project.css';

const Project = ({ title, slug, description, position, start, end }) => (
  <Link className='link' to={slug}>
    <div className="project-container">
      <h1 className="title">{title}</h1>
      <p className="description">{description}</p>
      <div className="project-details">
        <p className="text">Position:</p>
        <p className="position">{position}</p>
        <div className="period">
          <p className="period-start">{start}</p>
          <p className="text"> - </p>
          <p className="period-end">{end ?? <i>Currently</i>}</p>
        </div>
      </div>
    </div>
  </Link>
)

const Projects = () => {
  const data = useStaticQuery(graphql`
query GetAllProjectFrontmatter {
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
    <Layout current={'projects'}>
      <div className="content">
        {
          data?.allMarkdownRemark?.nodes.map(({ frontmatter: project }, key) => <Project key={key} {...project} />)
        }
      </div>
    </Layout>
  )
};

export const Head = () => <Seo title="Projects" />

export default Projects;
