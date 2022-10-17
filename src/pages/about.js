import React from 'react';
import Header from '../components/header';
import '../components/about/about.css';
import AboutText from '../components/about/about-text';
import AboutAvatar from '../components/about/about-avatar';
import AboutTable from '../components/about/about-table';

const About = () => (
  <div className='container'>
    <Header />
    <content className='content'>
      <AboutText />
      <AboutAvatar />
      <AboutTable />
    </content>
    <footer></footer>
  </div>
)

export default About;
