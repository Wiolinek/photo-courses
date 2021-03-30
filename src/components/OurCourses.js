import { useEffect, useState } from 'react';

import '../styles/our-courses.css';

import Course from './Course';


const OurCourses = () => {


    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3030/courses`)
        .then(response => response.json())
        .then(result => setCourses(result))
        .catch(error => console.log(`error ${error}`))
    }, []);

    let coursesList = courses.map(course =>
        <Course key={course.id} course={course}/>
    )


    return (
        <section>
            <h1>Our Courses</h1>
            {coursesList.length ? 
            <ul>{coursesList}</ul> : null}
        </section>
    )

}

export default OurCourses;