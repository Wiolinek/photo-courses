import { useEffect } from 'react';

import '../styles/about-us.css';


const AboutUs = () => {

    useEffect(() => {
        window.scrollTo(0,0);
    },[])

    return (
        <section className="about-us">
            <h1>Who we are...</h1>
            <svg className="section-circle" width="200" height="200" viewBox="0 0 242 242" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M161 70C161 108.66 129.66 140 91 140C52.3401 140 21 108.66 21 70C21 31.3401 52.3401 0 91 0C129.66 0 161 31.3401 161 70Z" fill="#FF0000" fillOpacity="0.25"/>
            <path d="M140 172C140 210.66 108.66 242 70 242C31.3401 242 1.64986e-06 210.66 1.64986e-06 172C1.64986e-06 133.34 31.3401 102 70 102C108.66 102 140 133.34 140 172Z" fill="#0202FF" fillOpacity="0.25"/><circle cx="170" cy="140" r="70" transform="rotate(-1.63957 170 140)" fill="#169216" fillOpacity="0.25"/>
            </svg>
            <p className="section-intro about-us">We started making workshops and on line courses in 2010. Our main goal was to inspire and support people in developing their creative skills. We wanted to take a fresh approach to education and to give simple access to visionaries, leaders, and professionals who are doing the work.</p>
            <p className="section-intro about-us">We truly believe there’s a creator in each of us but some of us needs some little help to discover a great potential. We make dreams come true and express ourselves through creativity. Creativity gives us power to change the world, to show what has not been shown.</p>
            <p className="section-intro about-us">We’re a community of innovators and our diversity makes us stronger and able to meet our students expactations. We’re here to inspire you, to support you whatever you do. We believe that access to quality education should be possible to everyone. Education opens up doors, breaks down barriers and fosters growth.</p>
            <p className="section-intro about-us">We create paths and tailor content for all our students, but we also encourage and appreciate independent thinking and exploration. Join us and explore unknown.</p>
        </section>
    )
    
}

export default AboutUs;