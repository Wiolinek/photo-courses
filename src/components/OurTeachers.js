import { useEffect, useState } from 'react';

import Course from './Course';

import '../styles/our-teachers.css';


const OurTeachers = () => {

    const [teachers, setTeachers] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3030/teachers`)
        .then(response => response.json())
        .then(result => setTeachers(result))
        .catch(error => console.log(`error ${error}`))
    }, []);

    let teachersList = teachers.map(teacher =>
        <div key={teacher.id} className='teachers__cart'>
            <img src={teacher.photo} alt={teacher.teacher_name} className='teachers__img'></img>
            <div className='teachers__info'>
                <h2 className='teachers__name'>{teacher.teacher_name}</h2>
                <p className='teachers__desc'>{teacher.description}</p>
            </div>
            <div className='teachers__courses'>
                <h3>Upcomming courses</h3>
                <ul className='teachers__courses-list'>
                    {/* <Course />
                    <Course />
                    <Course /> */}
                </ul>
            </div>  
        </div>
    )


    return (
        <section className='teachers'>
            {teachersList}
        </section>
    )

}

export default OurTeachers;