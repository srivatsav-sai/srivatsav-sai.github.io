import React from 'react';
// import { Document, Page } from 'react-pdf';
// import { PDFViewer } from '@react-pdf/renderer';
import Header from './header.js';
// import MyDocument from '../static/Srivatsav Resume.pdf'

const Resume = () => {
  return (
    <div className="container resume-section">
      <div><Header/></div>
      <h1>Resume</h1>
      <section>
        <h2>Experience</h2>
        <p>Web Development Engineer at Calsoft Technologies for almost Two Years from January 2022 to October 2023.</p>
        <p>Collaboratively engaged in a team-based project to design, develop, and maintain an internal-use website, leveraging advanced JavaScript frameworks.
        Spearheaded the development of the website's front-end using AngularJS, complemented by NodeJS and MongoDB for robust back-end functionality. Concurrently expanded my expertise by acquiring skills in ReactJS.
        Strategically integrated Git and GitHub into our team's workflow, optimizing operational efficiency by approximately 20%.
        Actively facilitated the upskilling of team members in Git through Agile methodologies, ensuring a swift and effective adoption of these critical tools.</p>
      </section>
      <section>
        <h2>Skills</h2>
        <p>I've got Programming Skills in JavaScript, Kotlin, Python, HTML, CSS and Mule.</p>
        <p>And while learning JavaScript, I also learnt it's frameworks AngularJS, NodeJS and ReactJS. And while learning Python, I also learnt Django framework.</p>
        <p>These are the tools I've been using personally and have used professionally during my time at CalSoft Technologies: Visual Studio Code, Git, Anypoint Sudio Platform and Mulesoft.</p>
        <p>And I also wanted to add MongoDB to expand into database technology skill.</p>
        <p>I also like to do a bit of video editing as a hobby.</p>
      </section>
      <section>
        <h2>Education</h2>
        <p>Graduated with Bachelor's in Computer Science Engineering from NIIT University,Rajasthan from 2018-2022</p>
        <p>Studied Board of Intermediate Education from FIITJEE,Hyderabad from 2016-2018</p>
      </section>
      <div>
        <a class="btn btn-link" href={process.env.PUBLIC_URL + '/Srivatsav Resume.pdf'} target='_blank' role="button">PDF</a>
      </div>
      {/* <div>
      <PDFViewer>
        <MyDocument />
      </PDFViewer>
      </div> */}
      {/* Additional sections as needed */}
    </div>
  );
}

export default Resume;
