import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Layout } from '../../components/layout';
import '../../components/projects/index.css';
import { Post } from '../../components/projects/post';
import { Seo } from "../../components/seo";

const projects = [
  {
    title: 'gedankenessen.de',
    project: 'software',
    slug: 'https://github.com/gedankenessen/gedankenessen.de',
    description: 'Website for personal projects',
    start: "2023-01-09",
    end: "2023-01-10"
  },
  {
    title: 'crud',
    project: 'software',
    slug: 'https://crud.gedankenessen.de',
    description: 'Prototype your frontend with your backend',
    start: "2022-12-01",
    end: "2023-01-09"
  },
  {
    title: 'marlonschlosshauer.de',
    project: 'software',
    slug: 'https://www.github.com/marlonschlosshauer/marlonschlosshauer.de',
    description: 'Personal website, portfolio and blog',
    start: "2022-10-14",
    end: "2022-11-03",
  },
  {
    title: 'Thesis',
    project: 'software',
    slug: 'https://github.com/marlonschlosshauer/thesis',
    description: 'Bachelor Thesis in Applied Computer Science about Composition of UI elements in reacl-c (ClojureScript) using Monads',
    start: "2022-03-29",
    end: "2022-09-11"
  },
  {
    title: 'Goose',
    project: 'software',
    slug: 'https://github.com/gedankenessen-legacy/goose-frontend',
    description: 'Continues delivery issue system with a focus on transparency built as a two semester long group project that I was a project manager for, during my bachelor',
    start: "2020-11-06",
    end: "2021-06-01"
  },
  {
    title: 'Blob',
    project: 'software',
    slug: 'https://github.com/gedankenessen-legacy/blob-frontend',
    description: 'A semester long group project about building an inventory management system that I was a project manager for, during my bachelor ',
    start: "2020-05-11",
    end: "2020-06-21"
  },
  {
    title: 'Tetris',
    project: 'software',
    slug: 'https://www.github.com/marlonschlosshauer/tetris',
    description: 'A minimal version of Tetris in your browser',
    start: "2019-03-20",
    end: "2019-03-22"
  },
]

export const Projects = () => {
  const data = useStaticQuery(graphql`
query GetAllProjectFrontmatter {
  allMarkdownRemark (sort: {fields: frontmatter___end, order: DESC}, filter: {frontmatter: {type: {eq: "project"}}}){
    nodes {
      frontmatter {
        slug
        title
        project
        description
        position
        start
        end
      }
    }
  }
}
`)

  const x = ([...
    data
      ?.allMarkdownRemark
      ?.nodes
      .map(({ frontmatter: project }) => ({ ...project })),
  ...projects
  ].sort((a, b) =>
    a.start > b.start
      ? -1
      : a.start < b.start
        ? 1
        : (a.end && b.end)
          ? a.end > b.end
            ? -1
            : a.end < b.end
              ? 1
              : 0
          : 0)
  );

  return (
    <Layout current={'projects'}>
      {x.map((project, key) => <Post key={key} {...project} />)}
    </Layout>
  )
};

export const Head = () => <Seo title="Projects" description='' />

export default Projects;
