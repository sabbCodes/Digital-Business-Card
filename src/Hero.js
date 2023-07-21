import React from 'react';
import MyPic from './twitter dp.jpg'

function Hero(){
    return (
        <section className='hero'>
            <img src={MyPic} alt='A placeholder look-alike of Sabb' />
            <div className='hero-child'>
                <h2>Sarafa Abbas</h2>
                <h5>Frontend Developer</h5>
                <a href='https://spontaneous-blini-5ed620.netlify.app/' id='portfolio-link'>My Portfolio</a>
                <div className='links'>
                    <a href='mailto:sarafaabbas@gmail.com' id='emailBtn'>
                        <i class="fa-solid fa-envelope"></i>Email
                    </a>
                    <a href='https://www.linkedin.com/in/abbas-sarafa-a76500244' id='linkedinBtn'>
                        <i class="fa-brands fa-linkedin"></i>LinkedIn
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero