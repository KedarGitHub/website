import React from 'react';
import PageHeaderContent from "../../components/PageHeaderContent";
import { BsInfoCircleFill } from 'react-icons/bs'
import { Animate } from 'react-simple-animate'
import { FaDatabase, FaPython, FaCode, FaDev } from 'react-icons/fa'
import './styles.scss'

const personalDetails = [
    {
        label: "Name",
        value: "Kedar Amar Nayak",
    },
    {
        label: "Age",
        value: "29",
    },
    {
        label: "Address",
        value: "162 Winspear Avenue, Buffalo, New York, United States- 14215",
    },
    {
        label: "Email",
        value: "kedarama@buffalo.edu",
    },
    {
        label: "Phone Number",
        value: "+1-716-994-6778",
    },
    {
        label: "Hobbies",
        value: "Watching/playing sports, cycling, watching TV/movies, singing and dancing, reading the atlas and improving geography, improving general knowledge, and quizzing.",
    },
];

const jobsummary = 'A Master\'s in engineering Data Sciences graduate with a 5+ years of work experience in Information Technology, software development, and consultancy in India'

const About = () => {
    return (
        <section id='about' className='about'>
            <PageHeaderContent
                headerText="About Me"
                icon={<BsInfoCircleFill size={40} />} />

            <div className="about__content">
                <div className="about__content__personalWrapper"><Animate
                    play
                    duration={2}
                    delay={0.5}
                    start={{
                        transform: 'translateX(900px)'
                    }}

                    end={{
                        transform: 'translateX(0px)'
                    }}

                >
                    <h3>Master of Science in Engineering Data Sciences from the University at Buffalo</h3>
                    <p>{jobsummary}</p>
                </Animate>

                    <Animate
                        play
                        duration={2}
                        delay={0.5}
                        start={{
                            transform: 'translateX(900px)'
                        }}

                        end={{
                            transform: 'translateX(0px)'
                        }}

                    >

                        <h3 className='personalInfo'>Personal Details</h3>
                        <ul>
                            {
                                personalDetails.map((item, i) => (
                                    <li key={i}>

                                        <span className='title'>{item.label}</span>
                                        <br></br>
                                        <br></br>
                                        <span className='value'>{item.value}</span>
                                    </li>
                                ))
                            }
                        </ul>
                    </Animate>
                </div>
                <div className="about__content__servicesWrapper">
                    <Animate
                        play
                        duration={2}
                        delay={0.5}
                        start={{
                            transform: 'translateX(900px)'
                        }}

                        end={{
                            transform: 'translateX(0px)'
                        }}

                    >
                        <div className='about__content__servicesWrapper__innerContent'>
                            <div>
                                <FaDev size={60} color='var(--yellow-theme-main-color)'></FaDev>
                            </div>
                            <div>
                                <FaDatabase size={60} color='var(--yellow-theme-main-color)'></FaDatabase>
                            </div>
                            <div>
                                <FaPython size={60} color='var(--yellow-theme-main-color)'></FaPython>
                            </div>
                            <div>
                                <FaCode size={60} color='var(--yellow-theme-main-color)'></FaCode>
                            </div>
                        </div>
                    </Animate>
                </div>

            </div>

        </section>
    );
};
export default About;