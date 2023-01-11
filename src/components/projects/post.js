import React from 'react';
import { Link } from 'gatsby'
import './post.css';

const dateFormatter = (date) => {
  const d = new Date(date);
  return d.getFullYear() + "." + `${d.getMonth() + 1}`.padStart(2, '0')
};

export const Post = ({ title, project, slug, description, position, start, end }) => (
  <Link className='project-post-link' to={slug} target={project === 'job' ? '_self' : '_blank'}>
    <div className="project-post-container">
      <h1 className="project-post-title">{title.trim()}</h1>
      <p className="project-post-description">{description.trim()}</p>
      <div className="project-post-position-details">
        {
          (project === 'job')
            ? <>
              <p className="project-post-text">Position: </p>
              <p className="project-post-position">{position.trim()}</p>
            </>
            : <></>
        }
      </div>
      <div className="project-post-period">
        <p className="project-post-text">{dateFormatter(start)}</p>
        <p className="project-post-text"> - </p>
        <p className="project-post-text">{end ? dateFormatter(end) : <i>Currently</i>}</p>
      </div>
    </div>
  </Link>
)
