import React from 'react';
import { FrameworkList } from '../data/frameworks';

const Works = (props) => {
  let frameworks = FrameworkList.map((flist) => {
    return (
      <div className="works__item" key={flist.id}>
        <a href={flist.url} target="_blank" rel="noopener noreferrer">
          {/* <div className="framework__image" style={{ backgroundImage: "url(" + skills.icon_src + ")" }}></div> */}
          <div className="works__image">
            <img src={flist.icon_src} alt="framework name"/>
          </div>
          {flist.name}
        </a>
      </div>
    );
  });
  
  return (
    <div className="main-content">
      <h2 className="main-content__title wow fadeInDown" data-wow-duration="1s">{props.title}</h2>
      <div className="works-item-wrap">
        {frameworks}
      </div>
    </div>
  );
};

export default Works;