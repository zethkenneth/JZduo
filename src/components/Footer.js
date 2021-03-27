import React from 'react';
import './Footer.css';


function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-text'>
               
                &copy; {1900 + new Date().getYear()}, created{" "}
                <i className="i" /> by John Ed Brillantes & Zeth Kenneth Pungtod
              
        </p>
      </section>
    </div>
  );
}

export default Footer;
