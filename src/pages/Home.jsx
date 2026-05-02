import React from 'react';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Services from '../components/Services';
import TechStack from '../components/TechStack';
import Industries from '../components/Industries';
import Portfolio from '../components/Portfolio';
import WhyChooseUs from '../components/WhyChooseUs';
import Process from '../components/Process';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';

const Home = () => {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <TechStack />
      <Industries />
      <Portfolio />
      <WhyChooseUs />
      <Process />
      <Testimonials />
      <CTA />
    </>
  );
};

export default Home;
