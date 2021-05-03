import { useEffect } from "react";

import Course from './Course';

import { useSelector } from 'react-redux';

import '../styles/our-teachers.css';

import { selectCourses, getCourses } from '../redux/coursesSlice';
import { useDispatch } from 'react-redux';


const OurTeachers = ( {teachersData}) => {

    const { courses } = useSelector(selectCourses);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCourses())
    }, [dispatch]);  

    teachersData = teachersData.map(teacher => ({...teacher, teacher_courses: teacher.teacher_courses.split(',').map(item => parseInt(item))}));
    console.log(teachersData)

    let teachersList = teachersData.map(teacher =>
        <li key={teacher.id} className='teachers-cart'>
            <div className='teachers-cart__details'>
                <img src={teacher.photo_teacher} alt={teacher.teacher_name} className='teachers-cart__img'></img>
                <div className='teachers-cart__info'>
                    <h2 className='teachers-cart__name'>{teacher.teacher_name}</h2>
                    <p className='teachers-cart__desc'>{teacher.description}</p>
                </div>
            </div>
            <div className='teachers-cart__courses'>
                <h3>Upcomming courses</h3>
                <ul className='teachers-cart__courses-list'>
                    {teachersData && courses && teacher.teacher_courses.map(teacher_course => courses.map(course => teacher_course === course.course_id && <Course key={course.course_id} course={course}/>))}
                </ul>
            </div>  
        </li>
    )


    return (
        <section className='teachers'>
            <h1>Meet our instructors...</h1>
            <svg className="section-circle" width="200" height="200" viewBox="0 0 242 242" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M161 70C161 108.66 129.66 140 91 140C52.3401 140 21 108.66 21 70C21 31.3401 52.3401 0 91 0C129.66 0 161 31.3401 161 70Z" fill="#FF0000" fillOpacity="0.25"/>
            <path d="M140 172C140 210.66 108.66 242 70 242C31.3401 242 1.64986e-06 210.66 1.64986e-06 172C1.64986e-06 133.34 31.3401 102 70 102C108.66 102 140 133.34 140 172Z" fill="#0202FF" fillOpacity="0.25"/><circle cx="170" cy="140" r="70" transform="rotate(-1.63957 170 140)" fill="#169216" fillOpacity="0.25"/>
            </svg>
            <p className="section-intro">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel modi consequuntur omnis nisi magnam voluptate consectetur iure, placeat veritatis dolorum provident ab pariatur sequi! Dolor consequuntur molestiae explicabo sapiente impedit odit laborum architecto nam. Nemo ipsa odio vitae enim error, sapiente, ratione nisi corporis delectus doloremque optio nihil reprehenderit iure quaerat perspiciatis libero eius expedita temporibus! Laborum quae voluptatibus voluptas ut, sapiente repellat quaerat tempora fuga explicabo veritatis sit enim, culpa facere, eaque aperiam. At praesentium quidem illo eos ut, tempora repudiandae. Quos fugit non autem, dolores fuga accusamus tempore porro nihil similique labore eos exercitationem totam eum sequi optio.</p>
            <ul className="teachers__list">{teachersList}</ul>
        </section>
    )
}

export default OurTeachers;