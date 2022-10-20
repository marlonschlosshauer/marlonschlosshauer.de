import { Link } from "gatsby";
import PropTypes from "prop-types";
import * as React from "react";
import Logo from '../../static/logo.svg';
import './header.css';

const links = [
  {
    title: 'About',
    link: '/about',
    key: 'about',
  },
  {
    title: 'Projects',
    link: '/projects',
    key: 'projects',
  },
  {
    title: 'Github',
    link: 'https://github.com/marlonschlosshauer'
  },
]

const Header = ({ current }) => (
  <header className='header'>
    <div className="header-logo-container">
      <Link to='/'>
        <div className="header-logo">
          <Logo className="header-logo-image" />
        </div>
      </Link>
    </div>
    {
      /*
      links.map((item, key) =>
        <Link
          key={key}
          className={['headerItem', current === item?.key ? 'headerItemActive' : 'headerItem']}
          to={`${item?.link}`}>
          {item?.title}
        </Link>
      )
      */
    }
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
