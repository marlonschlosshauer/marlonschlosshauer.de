import React from 'react';
import { StaticImage } from "gatsby-plugin-image";
import './about-avatar.css';

const AboutAvatar = ({ language = 'en' }) => (
  <div className="about-avatar-container">
    <StaticImage
      alt={language === 'en' ? "Picture of me" : "Bild von mir"}
      imgClassName='about-avatar-image'
      className='about-avatar-wrapper'
      src="../../assets/me.jpg"
    />
    <div className="about-email-container">
      <a className="about-email-link" href="mailto:marlon@gedankenessen.de">marlon@gedankenessen.de</a>
    </div>
  </div>
)

export default AboutAvatar;
