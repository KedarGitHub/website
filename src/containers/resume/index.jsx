import React from 'react';
import PageHeaderContent from "../../components/PageHeaderContent";
import { BsInfoCircleFill } from 'react-icons/bs'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import {data} from "./utils";
import "react-vertical-timeline-component/style.min.css"
import './styles.scss'
import {MdWork} from 'react-icons/md'

const Resume = () => {
    return (
        <section id='resume' className='resume'>
            <PageHeaderContent
                headerText="My Resume"
                icon={<BsInfoCircleFill size={40} />} />

            <div className='timeline'>
                <div className='timeline__experience'>
                    <h3 className='timeline__experience__header-text'>Work Experience</h3>
                    <VerticalTimeline
                    layout={'1-column'}
                    lineColor="var(--yellow-theme-main-color)"
                    >
                        {
                            data.experience.map((item, i)=>(
                                <VerticalTimelineElement
                                key={i}
                                className='timeline__experience__vertical-timeline-element'
                                contentStyle={{
                                    background: 'none',
                                    color : "var(--yellow-theme-sub-text-color)",
                                    border : '1.5px solid var(--yellow-theme-main-color)'
                                }}
                                // date = "2023 - Present"
                                icon ={<MdWork/>}
                                iconStyle={{
                                    background: '#181818',
                                    color : "var(--yellow-theme-main-color)",
                                }}
                                >
                                    <div className='vertical-timeline-element-title-wrapper'>
                                    <h3>
                                            {item.designation}
                                        </h3>
                                    </div>
                                    <p>{item.company}</p>
                                    <p>{item.location}</p>
                                    <p>{item.description}</p>
                                    <p>{item.date}</p>
                                </VerticalTimelineElement>

                            ))
                        }

                    </VerticalTimeline>
                </div>
                <div className='timeline__education'>
                    <h3 className='timeline__education__header-text'>Education</h3>
                    <VerticalTimeline
                    layout={'1-column'}
                    lineColor="var(--yellow-theme-main-color)"
                    >
                    {
                            data.education.map((item, i)=>(
                                <VerticalTimelineElement
                                key={i}
                                className='timeline__experience__vertical-timeline-element'
                                contentStyle={{
                                    background: 'none',
                                    color : "var(--yellow-theme-sub-text-color)",
                                    border : '1.5px solid var(--yellow-theme-main-color)'
                                }}
                                // date = "2023 - Present"
                                icon ={<MdWork/>}
                                iconStyle={{
                                    background: '#181818',
                                    color : "var(--yellow-theme-main-color)",
                                }}

                                >
                                    <div className='vertical-timeline-element-title-wrapper'>
                                        <h3>
                                            {item.type}
                                        </h3>
                                    </div>
                                    <p>{item.college}</p>
                                    <p>{item.location}</p>
                                    <p>{item.description}</p>
                                    <p>{item.date}</p>
                                </VerticalTimelineElement>

                            ))
                        }
                    </VerticalTimeline>
                </div>
            </div>
        </section>
    )
}
export default Resume;