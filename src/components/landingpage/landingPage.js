import React from 'react';
import './landingPage.scss';

const LandingPage = () => {
 return (
     <div>
    <div className="splash">
    <div className="splash_logo">
      BJL
    </div>
    <div className="splash_svg">
      <svg width="100%" height="100%">
        <rect width="100%" height="100%" />
        </svg>
    </div>
    <div className="splash_minimize">
      <svg width="100%" height="100%">
        <rect width="100%" height="100%" />
        </svg>
    </div>
  </div>
  <div className="text">
    <p>Xpense</p>
    <p>A Xpense Tracker</p>
    <a href='/auth'>Get Started</a>
  </div>
  </div>
 );
};

export default LandingPage;