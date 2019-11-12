import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
// import logo from './logo.svg';
import './App.css';
import Navbar from './components/navigation';
import Home from './components/home';
import Works from './components/works';
import About from './components/about';
import Skills from './components/skills';
import WOW from 'wow';

class App extends Component {
  componentDidMount() {
    const wow = new WOW();
    wow.init();
  }
  
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar/>
          <div className="page-content">
            <div className="content-wrapper">
              <div className="content-tags">
                <p className="tag-first">&lt;<span>html</span>&gt;</p>
                <p className="tag-second">&lt;<span>body</span>&gt;</p>
              </div>
              <Route exact path="/" render={() => <Home />} />
              <Route path="/about"  render={() => <About title="About me"/>} />
              <Route path="/skills" render={() => <Skills title="Skills"/>} />
              <Route path="/works" render={() => <Works title="Works"/>} />
              <div className="content-tags">
                <p className="tag-third">&lt;<span>/body</span>&gt;</p>
                <p className="tag-fourth">&lt;<span>/html</span>&gt;</p>
              </div>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
