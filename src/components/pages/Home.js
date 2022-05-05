import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import CardHome from '../CardHome'

function Home() {
  return (
    <>
      <HeroSection />
      <CardHome/>
      <Footer/>
    </>
  );
}

export default Home;