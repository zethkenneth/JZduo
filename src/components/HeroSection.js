import React from 'react';
import '../App.css';

import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>Does your Business Needs to Innovate?</h1>
      <p>Plan your innovations with us </p>
    </div>
  );
}

export default HeroSection;
