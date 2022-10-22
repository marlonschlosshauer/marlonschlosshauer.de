import { Link } from "gatsby";
import PropTypes from "prop-types";
import * as React from "react";
import Burger from '../assets/burger.svg';
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
export const HeaderMobile = ({ current }) => (
  <div className="header-burger-content">
    <div></div>
    <div className="header-burger-logo-container">
      <Link to='/'>
        <Logo className="header-burger-logo-image" />
      </Link>
    </div>
    <div className="header-burger-icon-container">
      <input className="header-burger-toggle" type="checkbox" />
      <span className="header-burger-icon"></span>
      <span style={{ marginTop: 12 }} className="header-burger-icon"></span>
      <span style={{ marginTop: 24 }} className="header-burger-icon"></span>
      <div className="header-burger-nav">
        <div className="header-burger-item">
          {
            links.map((item, key) =>
              <Link
                key={key}
                className={
                  current === (item?.key ?? item?.title.toLowerCase())
                    ? 'header-item-active'
                    : 'header-item-inactive'
                }
                target={item?.asNewTab ? '_blank' : '_self'}
                to={item?.link ?? `/${item?.title.toLowerCase()}`}>
                {item?.title}
              </Link>
            )
          }
          <hr className="header-burger-divider" />
          <p className="header-burger-subline">marlon@gedankenessen.de</p>
        </div>
      </div>
    </div>
  </div>
)

export const Header = ({ current, ...props }) => (
  <header className='header'>
    <div className="header-logo-container">
      <Link to='/'>
        <div className="header-logo">
          <Logo className="header-logo-image" />
        </div>
      </Link>
    </div>
    <div className="header-item-container-mobile">
      <Burger className="header-burger" />
    </div>
    <div className="header-item-container-desktop">
      {
        links.map((item, key) =>
          <Link
            key={key}
            className={current === (item?.key ?? item?.title.toLowerCase()) ? 'header-item-active' : 'header-item-inactive'}
            target={item?.asNewTab ? '_blank' : '_self'}
            to={item?.link ?? `/${item?.title.toLowerCase()}`}>
            {item?.title}
          </Link>
        )
      }
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
