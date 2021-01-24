import React from 'react';
import './education.css'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


const Education = () =>{
    return(
        <>
            <div className="outer-container">
                <div className="inner-container">
                    <VerticalTimeline>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: 'transparent', color: '#fff' }}
                            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                            date="2015"
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            // icon={<WorkIcon />}
                        >
                            <h3 className="vertical-timeline-element-title">PASSED CLASS Xth</h3>
                            <h4 className="vertical-timeline-element-subtitle">CGPA: 10</h4>
                            <p>
                            SCHOOL: VIDYA MANDIR PUBLIC SCHOOL, SECTOR 15A, FARIDABAD, HARYANA
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{background:'transparent', color: '#fff'}}
                            date="2017"
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            // icon={<WorkIcon />}
                        >
                            <h3 className="vertical-timeline-element-title">PASSED CLASS XIIth</h3>
                            <h4 className="vertical-timeline-element-subtitle">PERCENTAGE: 92.2%</h4>
                            <p>
                            SCHOOL: VIDYA MANDIR PUBLIC SCHOOL, SECTOR 15A, FARIDABAD, HARYANA
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="2018-PRESENT"
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            // icon={<WorkIcon />}
                        >
                            <h3 className="vertical-timeline-element-title">PURSUING B.TECH IN COMP. ENGINEERING</h3>
                            <h4 className="vertical-timeline-element-subtitle">CGPA: 8.61(TILL 4TH SEM)</h4>
                            <p>
                            UNIVERSITY: J.C. BOSE UNIVERSITY OF SCIENCE AND TECHNOLOGY, FARIDABAD, HARYANA
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="2006 - 2008"
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            // icon={<WorkIcon />}
                        >
                            <h3 className="vertical-timeline-element-title">Web Designer</h3>
                            <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                            <p>
                            User Experience, Visual Design
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--education"
                            date="April 2013"
                            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                            // icon={<SchoolIcon />}
                        >
                            <h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>
                            <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
                            <p>
                            Strategy, Social Media
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--education"
                            date="November 2012"
                            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                            // icon={<SchoolIcon />}
                        >
                            <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
                            <h4 className="vertical-timeline-element-subtitle">Certification</h4>
                            <p>
                            Creative Direction, User Experience, Visual Design
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--education"
                            date="2002 - 2006"
                            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                            // icon={<SchoolIcon />}
                        >
                            <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
                            <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
                            <p>
                            Creative Direction, Visual Design
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                            // icon={<StarIcon />}
                        />
                    </VerticalTimeline>
                </div>
            </div>
        </>
    );
}

export default Education;