import React from 'react';
import AboutAvatar from '../components/about/about-avatar';
import AboutTable from '../components/about/about-table';
import AboutText from '../components/about/about-text';
import Layout from '../components/layout';

const About = () => (
  <Layout>
    <content className='content'>
      <AboutText />
      <AboutAvatar />
      <AboutTable />
    </content>
  </Layout >
)

export default About;
