import React from 'react';
import Header from './header.js';

const Passion = () => {
  return (
    <div className="container passion-section">
      <div><Header/></div>
      <h1>My Passion for Video Editing</h1>
      <p>
        I've picked up this hobby before I got into college and have edited few videos. 
        Used few of them for college presentaions, few for celebrations at home, and a few for my YouTube channel; in which I upload rarely.
        And it's a hobby I go to, when I feel like taking a break.
        And I'd like to showcase it here on my own page.
      </p>
      
      <div className="video-container">
        <h2>My Best Edited Video</h2>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/BGIOSsngDMY"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen>
        </iframe>
      </div>

      {/* Add more videos or content as needed */}
    </div>
  );
}

export default Passion;
