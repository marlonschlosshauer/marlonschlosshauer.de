import React from 'react';
import AboutAvatar from '../components/about/about-avatar';
import AboutTable from '../components/about/about-table';
import AboutText from '../components/about/about-text';
import Layout from '../components/layout';
import Seo from '../components/seo';

const About = () => (
  <Layout current={'/'}>
    <AboutText />
    <AboutAvatar />
    <AboutTable />
  </Layout >
)

export const Head = () => <Seo title='Marlon Schlosshauer' />

export default About;
