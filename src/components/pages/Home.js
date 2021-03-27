import React,{ useEffect } from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';


function Home() {
  
useEffect(() => {
  window.scrollTo(0, 0)
}, [])

  return (
    <>
      <HeroSection />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
