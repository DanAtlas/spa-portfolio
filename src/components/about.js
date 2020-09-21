/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';

const About = (props) => (
  <div className="main-content">
    <h2 className="main-content__title wow fadeInDown" data-wow-duration="1s">{props.title}</h2>
    <div className="shortly-info wow zoomIn" data-wow-duration="0.7s" data-wow-delay=".5s">
      <p className="wow fadeInUp" data-wow-duration=".8s" data-wow-delay="1.1s">Hello there! <span role="img">👋</span> My name is Dias.</p>
      <p className="wow fadeInUp" data-wow-duration=".8s" data-wow-delay="1.1s">I am specializing in building exceptional, high-quality websites and applications. Valuable team member. Also, I love new technologies and services, as well as start-ups and technical products. Attentive to details and active person. Motivated to learn and hard working.</p>
      <div className="shortly-info-exp wow fadeInUp" data-wow-duration=".8s" data-wow-delay="1.3s">
        <p><span>Frontend developer</span> - <a href="https://talantiz.com/" target="_blank" rel="noopener noreferrer">Talantiz</a></p>
        <h4>Jan 2020 – Present</h4>
        <small>
          <p>Worked on projects:</p>
          <ul>
            <li>
              HR platform - <a href="https://www.talantiz.com/" target="_blank" rel="noopener noreferrer">Talent intelligence system</a>
            </li>
            <li>
              <a href="https://bolashak.talantiz.kz/ru" target="_blank" rel="noopener noreferrer">Online selection system</a> for the International Scholarship - <a href="https://bolashak.gov.kz/" target="_blank" rel="noopener noreferrer">Bolashak</a>
            </li>
            <li>
              Online selection system of the Academy of Public Administration - <a href="https://apa.talantiz.kz/en" target="_blank" rel="noopener noreferrer">APA Admission</a> for <a href="https://apa.kz/" target="_blank" rel="noopener noreferrer">The Academy of Public Administration under the President of the Republic of Kazakhstan</a>
            </li>
            <li><a href="https://aifc.job-fair.kz/en" target="_blank" rel="noopener noreferrer">Online AIFC Job Fair</a></li>
            <li><a href="https://bcpd.talantiz.kz/en" target="_blank" rel="noopener noreferrer">AIFC Leadership Programme</a></li>
          </ul>
        </small>
      </div>
      <div className="shortly-info-exp wow fadeInUp" data-wow-duration=".8s" data-wow-delay="1.4s">
        <p><span>Frontend developer</span> - <a href="https://remark.kz" target="_blank" rel="noopener noreferrer">Remark Digital-agency</a></p>
        <h4>Nov 2018 – Dec 2019</h4>
        <small>
          <ul>
            <li>Building responsive, adaptive, cross-browser compatible and pixel-perfect websites from scratch</li>
            <li>Optimizing components for maximum performance across a vast majority of web-capable devices and browsers</li>
            <li>Building reusable components for future use</li>
            <li>Fixing bugs and refactoring legacy code</li>
          </ul>
        </small>
      </div>
      <div className="shortly-info-exp wow fadeInUp" data-wow-duration=".8s" data-wow-delay="1.5s">
        <p><span>Frontend developer</span> - <a href="#!">Freelance</a></p>
        <h4>Nov 2017 – Oct 2018</h4>
        <small>
          <ul>
            <li>Development of landing pages, microsites and websites</li>
            <li>Building sites from scratch with CSS3-SCSS, Bootstrap and jQuery</li>
            <li>Translated PSD design mockups to actual code</li>
          </ul>
        </small>
      </div>
      <div className="shortly-info-exp wow fadeInUp" data-wow-duration=".8s" data-wow-delay="1.7s">
        <p><span>Software Developer Internship</span> - <a href="#!">IT Invest Group</a></p>
        <h4>Jan – Jun 2017</h4>
        <small>Developed an application and database of the company, that can quickly cope with documentation, using C# and SQL. Also preventing from unnecessary stuff and freeing up space on the desktop in the office</small>
      </div>
    </div>
  </div>
);

export default About;