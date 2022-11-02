import { Link } from "gatsby";
import * as React from "react";
import Logo from '../../assets/logo.svg';
import './header-mobile.css';

export const HeaderMobile = ({ current, links }) => (
  <div className="header-burger-wrapper">
    <input className="header-burger-toggle" type="checkbox" />
    <div className="header-burger-logo">
      <Link to='/'>
        <Logo className="header-burger-logo-image" />
      </Link>
    </div>
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
)

export default HeaderMobile;

