import React from 'react';
import { Link } from 'gatsby';
import './post.css';

export const Post = ({ slug, title, description, date }) => (
  <Link className='blog-post-link' to={slug}>
    <div className="blog-post-container">
      <h1 className="blog-post-title">{title}</h1>
      <p className="blog-post-date">{date}</p>
      <p className="blog-post-description">{description}</p>
    </div>
  </Link>
)
