import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Service from '../components/Service';
import InService from '../components/InService';
import Features from '../components/Features';
import Contact from '../components/Contact';
import BusinessTypes from '../components/BusinessTypes';
import ScheduleDemo from '../components/ScheduleDemo';
import Footer from '../components/Footer';
import ChatBot from '../components/ChatBot';

const Homepage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ChatBot />
      <Service />
      <InService />
      <Features />
      <Contact />
      <BusinessTypes />
      <ScheduleDemo />
      <Footer />
    </>
  );
};

export default Homepage;
