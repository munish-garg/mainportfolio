import './App.css';

//NavBar
import Navbar from './Components/Navbar/Navbar';
import './Components/Navbar/navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import {useState} from 'react';

//Header
import Header from './Components/Header/Header';

//Particles
import Particles from 'react-particles-js';

function App() {
  const [About, setAbout] = useState('null');
  const [Education, setEducation] = useState('null');
  const [Skills, setSkills] = useState('null');
  const [Certifications, setCertifications] = useState('null');
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
      <nav className="navbar navbar-expand-lg navbar-dark" style={{background:'transparent'}}>
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
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="#">About Me</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Education</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Skills</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link active">Certifications</a>
                        </li>
                        <li className="nav-item">
                            <a href="https://drive.google.com/file/d/1HtDnKoEtfEocoXX_ItSg7Ih5vVXZjqFW/view?usp=sharing" className="nav-link active" target="_blank">Resume</a>
                        </li>
                    </ul>
                    </div>
                </div>
            </div>
        </nav>
      <Header/>
    </>
  );
}

export default App;
