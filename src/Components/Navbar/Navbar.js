import React from 'react';
import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
// import {ImagePortfolio} from './images/ImagePortfolio.jpg'

const Navbar = () =>{
    return(
        <>
          <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor:'black'}}>
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
                            <a href="#" className="nav-link active">Achievements</a>
                        </li>
                    </ul>
                    </div>
                </div>
            </div>
        </nav>  
        </>
    );
}

export default Navbar;