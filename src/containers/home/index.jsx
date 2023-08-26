import React from 'react';
import './styles.scss'
import {useNavigate} from 'react-router-dom'
import {Animate} from 'react-simple-animate'

const Home = () => {

    const navigate = useNavigate();
    

    const handleNavigateToContactPage = ()=>{
        navigate('./about')

    }

    return (
        <section id="home" className='home'>
            <div className='home__text-wrapper'>
                <h1>
                    Hello and Welcome !
                    <br />
                    <br />
                    Kedar Amar Nayak
                    <br />
                    Data Science Graduate
                </h1>
                <br/>
                <Animate 
                play
                duration={2} 
                delay={0.5} 
                start={{
                        transform : 'translateY(550px)'
                }}
                
                end={{
                        transform : 'translateY(0px)'
                }}

                >
                    <div className='home_contact-me'>
                    <button onClick={handleNavigateToContactPage} >Contact Details</button>
            </div>
            </Animate>
            </div >
            
        </section >

    )
}
export default Home;