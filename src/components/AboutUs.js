import { useEffect, useState } from 'react';

import '../styles/about-us.css';


const AboutUs = () => {

    const [about, setAbout] = useState([]);

    useEffect(() => {
        window.scrollTo(0,0);
    },[])

    useEffect(() => {
        fetch(`http://photopassion.ultra-violet.codes/about`)
        .then(response => response.json())
        .then(result => setAbout(result))
        .catch(error => console.log(`error ${error}`))
    }, []);

    const aboutUsList = about.map(item => 
        <li key={item.id} className="about-us__list">
            <img src={item.photo_about} alt={item.alt} className="about-us__img"></img>
            <p className="section-intro about-us">{item.text}</p>
        </li>);


    return (
        <section className="about-us">
            <h1>Who we are...</h1>
            <svg className="section-circle" width="200" height="200" viewBox="0 0 242 242" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M161 70C161 108.66 129.66 140 91 140C52.3401 140 21 108.66 21 70C21 31.3401 52.3401 0 91 0C129.66 0 161 31.3401 161 70Z" fill="#FF0000" fillOpacity="0.25"/>
            <path d="M140 172C140 210.66 108.66 242 70 242C31.3401 242 1.64986e-06 210.66 1.64986e-06 172C1.64986e-06 133.34 31.3401 102 70 102C108.66 102 140 133.34 140 172Z" fill="#0202FF" fillOpacity="0.25"/><circle cx="170" cy="140" r="70" transform="rotate(-1.63957 170 140)" fill="#169216" fillOpacity="0.25"/>
            </svg>
            <p className="section-intro about-us">We started making workshops and on line courses in 2010. Our main goal was to inspire and support people in developing their creative skills. We wanted to take a fresh approach to education and to give simple access to visionaries, leaders, and professionals who are doing the work.</p>
            <ul>
                {aboutUsList}
            </ul>
        </section>
    ) 
}

export default AboutUs;