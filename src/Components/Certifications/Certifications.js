import React from 'react';
import './certifications.css';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Certifications = () =>{
    return(
        <>
            <div className="outer-container2">
                <div className="inner-container2">
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
                            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
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
                    </VerticalTimeline>
                </div>
            </div>
        </>
    );
}

export default Certifications;