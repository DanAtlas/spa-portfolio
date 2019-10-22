import React from 'react';

const About = (props) => (
  <div className="main-content">
    <h2 className="main-content__title wow fadeInDown" data-wow-duration="1s">{props.title}</h2>
    <div className="shortly-info">
      <p>I am always willing to gain knowledge, produce creative and effective applications to ensure customer satisfaction. For that reason, I find extreme joy and interest in the programming. I enjoy transforming complex problem into simple, beautiful and intuitive solutions. Shortly saying, passionate, enthusiastic and creative on what I'm doing.</p><br/><br/>
      <p>When I’m not coding or pushing pixels, you’ll find me in the gym, having fun with friends or trying to learn new things everyday.</p>
    </div>
  </div>
);

export default About;