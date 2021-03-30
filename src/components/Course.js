import '../styles/course.css';



const Course = ( {course} ) => {



    return (
        <li>
            <h2>{course.name}</h2>
            <p>{course.level}</p>
            <p>{course.duration}</p>
            <p>{course.date}</p>
            <p>{course.plate}</p>
            <p>{course.price}</p>
        </li>
    )
    
}

export default Course;