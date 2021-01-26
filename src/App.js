import './App.css';

//NavBar
import Navbar from './Components/Navbar/Navbar';
import './Components/Navbar/navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import {useState} from 'react';
import {Switch, Route} from 'react-router-dom';

//Header
import Header from './Components/Header/Header';

//Particles
import Particles from 'react-particles-js';

//About
import About from './Components/About/About';

//Skills
import Skills from './Components/Skills/Skills';

//Education
import Education from './Components/Education/Education';

//Certifications
import Certifications from './Components/Certifications/Certifications';

function App() {
  return (
    <>
      <Particles
      params={{
        particles:{
          number:{
            value:60,
            density:{
              enable:true,
              value_area:1000
            }
          },
          shape:{
            type:"circle",
            stroke:{
              width: 10,
              color: "#ff0000"
            }
          }
        }
      }}
      />
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark" style={{background:'transparent'}}>
            <div className="container-fluid">
                <div className="container">
                    <a className="navbar-brand" href="#">Port<span>folio.</span></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        {/* <span className="navbar-toggler-icon"></span> */}
                        <FontAwesomeIcon icon={faBars} style={{color:'white'}}/>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/mainportfolio">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="/about">About Me</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="/education">Education</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="/skills">Skills</a>
                        </li>
                        <li className="nav-item">
                            <a href="/certifications" className="nav-link active">Certifications</a>
                        </li>
                        {/* <li className="nav-item">
                            <a href="https://drive.google.com/file/d/1HtDnKoEtfEocoXX_ItSg7Ih5vVXZjqFW/view?usp=sharing" className="nav-link active" target="_blank" rel="noreferrer">Resume</a>
                        </li> */}
                    </ul>
                    </div>
                </div>
            </div>
        </nav>
      <Switch>
        <Route exact path='/about' component={About}/>
        <Route exact path='/certifications' component={Certifications}/>
        <Route exact path='/education' component={Education}/>
        <Route exact path='/mainportfolio' component={Header}/>
        <Route exact path='/skills' component={Skills}/>
      </Switch>
    </>
  );
}

export default App;
