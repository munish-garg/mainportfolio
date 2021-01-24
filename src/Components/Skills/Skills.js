import React from 'react';
import './skills.css';
import html5 from '../Skills/images/html5.png';
import css3 from '../Skills/images/css3.png';
import js from '../Skills/images/js.png';
import cpp from '../Skills/images/cpp.png';
import python2 from '../Skills/images/python2.png';
import react4 from '../Skills/images/react4.png';
import redux from '../Skills/images/redux.png';
import django from '../Skills/images/django.png';



const Skills = () =>{
    return (
        <>
            <div className="outer-container">
                <div className="container">
                    <h2>SKILLS KNOWN TO ME ARE:</h2>
                    <div className="row">
                        <div className="col-lg-3 border-0">
                            <div className="card">
                                <div className="card-img">
                                    <img src={html5} alt="html5"/>
                                </div>
                                <div className="card-content">
                                    <p>HTML5</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 border-0">
                            <div className="card">
                                <div className="card-img">
                                    <img src={css3} alt="css3"/>
                                </div>
                                <div className="card-content">
                                    <p>CSS3</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 border-0">
                            <div className="card">
                                <div className="card-img">
                                    <img src={js} alt="JavaScript"/>
                                </div>
                                <div className="card-content">
                                    <p>JavaScript</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 border-0">
                            <div className="card">
                                <div className="card-img">
                                    <img src={cpp} alt="C++"/>
                                </div>
                                <div className="card-content">
                                    <p>C++</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 border-0">
                            <div className="card">
                                <div className="card-img">
                                    <img src={python2} alt="Python"/>
                                </div>
                                <div className="card-content">
                                    <p>PYTHON</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 border-0">
                            <div className="card">
                                <div className="card-img">
                                    <img src={react4} alt="React"/>
                                </div>
                                <div className="card-content">
                                    <p>REACT</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 border-0">
                            <div className="card">
                                <div className="card-img">
                                    <img src={redux} alt="Redux"/>
                                </div>
                                <div className="card-content">
                                    <p>REDUX</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 border-0">
                            <div className="card">
                                <div className="card-img">
                                    <img src={django} alt="Django"/>
                                </div>
                                <div className="card-content">
                                    <p>DJANGO</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Skills;