import React from 'react';

const About = (props) => (
  <div className="main-content">
    <h2 className="main-content__title wow fadeInDown" data-wow-duration="1s">{props.title}</h2>
    <div className="shortly-info wow zoomIn" data-wow-duration="0.7s" data-wow-delay=".5s">
      <p className="wow fadeInUp" data-wow-duration=".8s" data-wow-delay="1.1s">Everything started with a passion for web technologies...</p>
      <p className="wow fadeInUp" data-wow-duration=".8s" data-wow-delay="1.1s">I am always willing to gain knowledge, produce creative and effective applications to ensure customer satisfaction. For that reason, I find extreme joy and interest in the programming. I enjoy transforming complex problem into simple, beautiful and intuitive solutions. Shortly saying, passionate, enthusiastic and creative on what I'm doing.</p>
      <p className="wow fadeInUp" data-wow-duration=".8s" data-wow-delay="1.2s">When I’m not coding or pushing pixels, you’ll find me in the gym, having fun with friends or trying to learn new things everyday.</p>
      <div className="shortly-info-exp wow fadeInUp" data-wow-duration=".8s" data-wow-delay="1.3s">
        <p><span>Front-end developer</span> - <a href="https://remark.kz" target="_blank" rel="noopener noreferrer">Remark Digital-agency</a></p>
        <h4>Nov 2018 – Present</h4>
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
        <p><span>Front-end developer</span> - <a>Freelance</a></p>
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
        <p><span>Software Developer Internship</span> - <a>IT Invest Group</a></p>
        <h4>Jan – Jun 2017</h4>
        <small>Developed an application and database of the company, that can quickly cope with documentation, using C# and SQL. Also preventing from unnecessary stuff and freeing up space on the desktop in the office</small>
      </div>
    </div>
  </div>
);

export default About;