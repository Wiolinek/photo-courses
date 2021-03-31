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
        <section className='courses'>
            <h1>Choose one of our courses...</h1>
            <p className='courses__intro'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit ullam ex eos sunt cupiditate eligendi odit ratione obcaecati saepe non rerum voluptatibus harum commodi, delectus odio doloribus, recusandae deleniti fuga. Minus praesentium quidem nam quae error blanditiis nesciunt nostrum dolore. Ut quam nemo vero impedit est quod sit commodi, ad qui at inventore adipisci laborum labore fugiat dolore neque non pariatur id voluptas rem, deserunt quidem vitae! Esse, id reiciendis accusantium assumenda ipsa aliquid asperiores, voluptates quisquam iusto pariatur suscipit culpa sit laboriosam molestiae excepturi qui repellendus iste, quasi similique! Hic quaerat enim labore ullam nobis deleniti, ratione maiores soluta.</p>
            <div className='courses__filters'>Filters
            <form>


            </form>
            </div>
            {coursesList.length ? 
            <ul className='courses__list'>{coursesList}</ul> : null}
        </section>
    )

}

export default OurCourses;