import React from 'react';
import './education.css';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


const Education = () =>{
    return(
        <>
            <div className="outer-container1">
                <div className="inner-container1">
                    <VerticalTimeline>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: 'transparent', color: 'yellow' }}
                            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                            date="2015"
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            // icon={<WorkIcon />}
                        >
                            <h4 className="vertical-timeline-element-title">PASSED CLASS Xth</h4>
                            <h4 className="vertical-timeline-element-subtitle">CGPA: 10</h4>
                            <p>
                            SCHOOL: VIDYA MANDIR PUBLIC SCHOOL, SECTOR 15A, FARIDABAD, HARYANA
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{background:'transparent', color: 'yellow'}}
                            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                            date="2017"
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            // icon={<WorkIcon />}
                        >
                            <h4 className="vertical-timeline-element-title">PASSED CLASS XIIth</h4>
                            <h4 className="vertical-timeline-element-subtitle">PERCENTAGE: 92.2%</h4>
                            <p>
                            SCHOOL: VIDYA MANDIR PUBLIC SCHOOL, SECTOR 15A, FARIDABAD, HARYANA
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="2018-PRESENT"
                            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                            contentStyle={{ background: 'transparent', color: 'yellow' }}
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            // icon={<WorkIcon />}
                        >
                            <h4 className="vertical-timeline-element-title">PURSUING B.TECH IN COMP. ENGINEERING</h4>
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

export default Education;