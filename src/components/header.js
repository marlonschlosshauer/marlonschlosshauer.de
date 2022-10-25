import { Link } from "gatsby";
import PropTypes from "prop-types";
import * as React from "react";
import Logo from '../assets/logo.svg';
import './header.css';

const links = [
  {
    title: 'About',
  },
  {
    title: 'Projects',
  },
  {
    title: 'Blog',
  },
  {
    title: 'Github',
    link: 'https://github.com/marlonschlosshauer',
    asNewTab: true,
  },
]

export const Header = () => (
  <header className='header-container'>
    <div className="header-content">
      <div className="header-nav">
        <div className="header-empty" />
        <div className="header-logo">
          <Logo className="header-logo-image" />
        </div>
        <div className="header-burger"></div>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Marlon Schlosshauer`,
}

export default Header

