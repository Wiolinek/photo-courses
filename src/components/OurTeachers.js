import { useEffect } from "react";

import { getCourses } from '../redux/coursesSlice';
import { useDispatch } from 'react-redux';

import OurTeachersCard from './OurTeachersCard';

import '../styles/our-teachers.css';


const OurTeachers = ( { teachersData } ) => {

    const dispatch = useDispatch();

    useEffect(() => {
        window.scrollTo(0,0);
    },[])

    useEffect(() => {
        dispatch(getCourses())
    }, [dispatch]);  

    teachersData = teachersData.map(teacher => ({...teacher, teacher_courses: teacher.teacher_courses.split(',').map(item => parseInt(item))}));

    let teachersList = teachersData.map(teacher =>
        <OurTeachersCard teacher={teacher} teachersData={teachersData}/>
    )


    return (
        <section className="teachers">
            <h1>Meet our instructors...</h1>
            <svg className="section-circle" width="200" height="200" viewBox="0 0 242 242" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M161 70C161 108.66 129.66 140 91 140C52.3401 140 21 108.66 21 70C21 31.3401 52.3401 0 91 0C129.66 0 161 31.3401 161 70Z" fill="#FF0000" fillOpacity="0.25"/>
                <path d="M140 172C140 210.66 108.66 242 70 242C31.3401 242 1.64986e-06 210.66 1.64986e-06 172C1.64986e-06 133.34 31.3401 102 70 102C108.66 102 140 133.34 140 172Z" fill="#0202FF" fillOpacity="0.25"/><circle cx="170" cy="140" r="70" transform="rotate(-1.63957 170 140)" fill="#169216" fillOpacity="0.25"/>
            </svg>
            <p className="section-intro">Our Teachers are the best-selling authors and many photo awards winners. They are leaders in their field. Now, they are excited to share their experience and knowlegde with you.</p>
            <ul className="teachers__list">
                {teachersList}
            </ul>
        </section>
    )
}

export default OurTeachers;