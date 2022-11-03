import React from 'react';
import { Link } from 'gatsby'
import './post.css';

export const Post = ({ slug, title, description, position, start, end }) => (
  <Link className='project-post-link' to={slug}>
    <div className="project-post-container">
      <h1 className="project-post-title">{title}</h1>
      <p className="project-post-description">{description}</p>
      <div className="project-post-position-details">
      <p className="project-post-text">Position: </p>
      <p className="project-post-position">{position}</p>
      </div>
      <div className="project-post-period">
        <p className="project-post-text">{start}</p>
        <p className="project-post-text"> - </p>
        <p className="project-post-text">{end ?? <i>Currently</i>}</p>
      </div>
    </div>
  </Link>
)
