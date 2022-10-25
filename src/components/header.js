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

export const HeaderMobileOpen = ({ onClick }) => (
  <header className='header-container-open'>
    <div className="header-content-open">
      <div className="header-nav">
        <div className="header-empty" />
        <div className="header-logo">
          <Link to='/'>
            <Logo className="header-logo-image" />
          </Link>
        </div>
        <button className="header-burger" onClick={onClick}>
          <Burger className="header-burger-image" />
        </button>
      </div>
      <div className="header-items">
        {
          links.map((item, key) =>
            <Link
              key={key}
              className={'header-item'}
              target={item?.asNewTab ? '_blank' : '_self'}
              to={item?.link ?? `/${item?.title.toLowerCase()}`}>
              {item?.title}
            </Link>
          )
        }
        <hr className="header-divider" />
        <p className="header-subline">marlon@gedankenessen.de</p>
      </div>
    </div>
  </header>
)

export const HeaderMobile = ({ onClick = () => { } }) => (
  <header className='header-container'>
    <div className="header-content">
      <div className="header-nav">
        <div className="header-empty" />
        <div className="header-logo">
          <Link to='/'>
            <Logo className="header-logo-image" />
          </Link>
        </div>
        <button className="header-burger" onClick={onClick}>
          <Burger className="header-burger-image" />
        </button>
      </div>
    </div>
  </header>
)


export const Header = () => {
  const [open, setOpen] = React.useState();

  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
      document.body.style.maxHeight = '100vh';
    } else {
      document.body.style.overflow = 'unset';
      document.body.style.maxHeight = 'auto';
    }

  }, [open])

  return (!open)
    ? <HeaderMobile onClick={() => setOpen(!open)} />
    : <HeaderMobileOpen onClick={() => setOpen(!open)} />
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

