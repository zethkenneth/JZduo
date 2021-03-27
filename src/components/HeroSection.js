import React from 'react';
import '../App.css';

import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>System Administration and Maintenance</h1>
      <p>This website is intended for our project requirements</p>
    </div>
  );
}

export default HeroSection;
