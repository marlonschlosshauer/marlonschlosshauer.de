import PropTypes from "prop-types";
import * as React from "react";
import { HeaderMobile } from './header-mobile';
import { HeaderDesktop } from './header-desktop';
import './header.css';

const links = [
  {
    title: 'About',
    key: '/',
    link:'/',
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
];

export const Header = ({ current }) => (
  <div className="header-container">
    <div className="header-mobile">
      <HeaderMobile current={current} links={links} />
    </div>
    <div className="header-desktop">
      <HeaderDesktop current={current} links={links} />
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Marlon Schlosshauer`,
}

export default Header

