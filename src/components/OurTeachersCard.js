import { selectCourses } from '../redux/coursesSlice';
import { useSelector } from 'react-redux';

import Course from './Course';

import '../styles/our-teachers-card.css';


const OurTeachersCard = ( { teachersData, teacher } ) => {

    const { courses } = useSelector(selectCourses);
    

    return (
        <li key={teacher.id} className="teachers-card">
            <div className="teachers-card__details">
                <img src={teacher.photo_teacher} alt={teacher.teacher} className="teachers-card__img"></img>
                <div className="teachers-card__info">
                    <h2 className="teachers-card__name">{teacher.teacher}</h2>
                    <p className="teachers-card__desc">{teacher.description}</p>
                </div>
            </div>
            <div className="teachers-card__courses">
                <h3>Upcomming courses</h3>
                <ul className="teachers-card__courses-list">
                    {teachersData && courses && teacher.teacher_courses.map(teacher_course => courses.map(course => teacher_course === course.course_id &&
                    <Course key={course.course_id} course={course}/>))}
                </ul>
            </div>  
        </li>
    )
}

export default OurTeachersCard;