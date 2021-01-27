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
                            date="2020"
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            // icon={<WorkIcon />}
                        >
                            <h4 className="vertical-timeline-element-title">Certification in Frontend Development</h4>
                            <h4 className="vertical-timeline-element-subtitle">(Coding Blocks)</h4>
                            <p>
                            <a href="https://online.codingblocks.com/app/certificates/CBOL-70838-1ee6" target="_blank">Link for the certificate</a>
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{background:'transparent', color: '#fff'}}
                            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                            date="2020"
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            // icon={<WorkIcon />}
                        >
                            <h4 className="vertical-timeline-element-title">Certification in Backend Development using Django</h4>
                            <h4 className="vertical-timeline-element-subtitle">(Coding Blocks)</h4>
                            <p>
                            <a href="https://online.codingblocks.com/app/certificates/CBOL-55370-5540" target="_blank">Link for certificate</a>
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: 'transparent', color: '#fff' }}
                            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                            date="2020"
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            // icon={<WorkIcon />}
                        >
                            <h3 className="vertical-timeline-element-title">Certifcation in REST API</h3>
                            <h4 className="vertical-timeline-element-subtitle">(Hackerrank)</h4>
                            <p>
                            <a href="https://www.hackerrank.com/certificates/39d8641b64ba" target="_blank">Link for Certificate</a>
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: 'transparent', color: '#fff' }}
                            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                            date="2020"
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            // icon={<WorkIcon />}
                        >
                            <h3 className="vertical-timeline-element-title">Certification in Problem Solving</h3>
                            <h4 className="vertical-timeline-element-subtitle">(Hackerrank)</h4>
                            <p>
                            <a href="https://www.hackerrank.com/certificates/651aa5753b7a" target="_blank">Link for Certificate</a>
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: 'transparent', color: '#fff' }}
                            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                            date="2020"
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            // icon={<WorkIcon />}
                        >
                            <h3 className="vertical-timeline-element-title">Certification in Python</h3>
                            <h4 className="vertical-timeline-element-subtitle">(Hackerrank)</h4>
                            <p>
                            <a href="https://www.hackerrank.com/certificates/e7cc515beec0" target="_blank">Link for Certificate</a>
                            </p>
                        </VerticalTimelineElement>
                    </VerticalTimeline>
                </div>
            </div>
        </>
    );
}

export default Certifications;