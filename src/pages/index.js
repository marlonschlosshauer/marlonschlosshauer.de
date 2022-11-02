import React from 'react';
import AboutAvatar from '../components/about/about-avatar';
import AboutTable from '../components/about/about-table';
import AboutText from '../components/about/about-text';
import Layout from '../components/layout';
import Seo from '../components/seo';

const About = ({ path }) => (
  <Layout current={path}>
    <AboutText />
    <AboutAvatar />
    <AboutTable />
  </Layout >
)

export const Head = () => <Seo title='About me' />

export default About;
