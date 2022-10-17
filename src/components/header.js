import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import PropTypes from "prop-types";
import * as React from "react";
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
    <StaticImage
      loading="eager"
      alt="Logo"
      height={20}
      className='headerLogo'
      src="../images/logo.svg"
    />
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
