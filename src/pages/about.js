import React from 'react';
import Header from '../components/header';
import '../components/about/about.css';
import AboutText from '../components/about/about-text';
import AboutAvatar from '../components/about/about-avatar';
import AboutTable from '../components/about/about-table';

const About = () => (
  <div className='container'>
    <div className="animated animatdFadeInUp fadeInUp" style={{ animationDelay: 0 }}>
      <Header />
    </div>
    <content className='content'>
      <div className="animated animatdFadeInUp fadeInUp" style={{ animationDelay: '100ms' }}>
        <AboutText />
      </div>
      <div className="animated animatdFadeInUp fadeInUp" style={{ animationDelay: '200ms' }}>
        <AboutAvatar />
      </div>
      <div className="animated animatdFadeInUp fadeInUp" style={{ animationDelay: '300ms' }}>
        <AboutTable />
      </div>
    </content>
    <footer></footer>
  </div>
)

export default About;
