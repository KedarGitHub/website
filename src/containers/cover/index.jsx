import React from 'react';
import PageHeaderContent from "../../components/PageHeaderContent";
import { BsInfoCircleFill } from 'react-icons/bs'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import {data} from "./utils";
import "react-vertical-timeline-component/style.min.css"
import './styles.scss'
import {MdWork} from 'react-icons/md'

const Cover = () => {
    return (
        <section id='cover' className='cover'>
            <PageHeaderContent
                headerText="Cover Letter"
                icon={<BsInfoCircleFill size={40} />} />

            <div className='timeline'>
                <div className='timeline__awards'>
                    <h3 className='timeline__awards__header-text'>DEAR RECRUITER</h3>
                    <VerticalTimeline
                    layout={'1-column'}
                    lineColor="var(--yellow-theme-main-color)"
                    >
                        {
                            data.cover.map((item, i)=>(
                                <VerticalTimelineElement
                                key={i}
                                className='timeline__awards__vertical-timeline-element'
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
                                            {item.name}
                                        </h3>
                                    </div>
                                    <p>{item.description1}</p>
                                    <p>{item.description2}</p>
                                    <p>{item.description3}</p>
                                    <p>{item.description4}</p>
                                </VerticalTimelineElement>

                            ))
                        }

                    </VerticalTimeline>
                </div>
            </div>
        </section>
    )
}
export default Cover;