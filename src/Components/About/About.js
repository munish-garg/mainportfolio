import React from 'react';
import './about.css'
import munish from './images/munish.jpg';

const About = () =>{
    return(
        <>
            <div className="outer-container">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <img src={munish} alt="Munish" className='img-fluid' id="image"/>
                        </div>
                        <div className="col-lg-8">
                            <div className="content">
                                <h4>ABOUT ME</h4>
                                <ul>
                                    <li>My name is Munish Kumar Garg and I am currently studying in 3rd year of Computer Engineering and belongs to Faridabad, Hayana.</li>
                                    <li>I am pursuing my B.Tech from J.C. Bose University of Science and Technology, YMCA which itself is located in Faridabad. My whole Educational background can be found at <a href="/education">this</a> link</li>
                                    <li>I found Coding as the important part of today's lifestyle as without it, the world would not have been so much digitalized. The reason of huge digitalization is due to the code which is working in the backend to support it.</li>
                                    <li>I have profficient in various skills which can be found <a href="/skills">here</a>.</li>
                                    <li>My hobbies include listening to music, reading History and travelling.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;