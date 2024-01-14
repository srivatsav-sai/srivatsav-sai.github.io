import React from 'react';
import Header from './header.js';

const About = () => {
  return (
    <div className="container home-section">
      <div><Header/></div>
      <h1>About Me</h1>
      <p>I'm a Versatile Junior Full Stack Developer with a solid foundation in JavaScript and its frameworks including React, Angular, and Node. Proficient in Kotlin with creating an efficient, scalable, and maintainable code. Adaptable and solutions-focused, with a demonstrated history of contributing to collaborative environments and projects, and a commitment to continuous learning and professional growth.</p>
      <p>I've been interested in computers since the time I've gotten onto the internet at the the boom of 4G era in India. Especially have been fascinated with how websites worked to provide information for the whole wide world.</p>
      <p>And so, I've gotten into that field of development. This website is a culmination of all the things that I've learnt throughout the last few years about developing a website.</p>
      {/* Add more content here */}
    </div>
  );
}

export default About;
