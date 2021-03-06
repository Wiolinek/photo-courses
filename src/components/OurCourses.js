import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { selectFilteredCourses, getCourses, resetFilters } from '../redux/coursesSlice';

import Course from './Course';
import OurCoursesFilters from './OurCoursesFilters';

import '../styles/our-courses.css';


const OurCourses = () => {

    const filteredCourses = useSelector(selectFilteredCourses);
    const dispatch = useDispatch();  

    useEffect(() => {
        window.scrollTo(0,0);
    },[])
    
    useEffect(() => {
        dispatch(getCourses());
        dispatch(resetFilters());
    }, [dispatch]);

    const coursesList = (filteredCourses.map(course =>
            <Course key={course.course_id} course={course}/>))


    return (
        <section className="courses">
            <h1>Choose one of our courses...</h1>
            <svg className="section-circle" width="200" height="200" viewBox="0 0 242 242" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M161 70C161 108.66 129.66 140 91 140C52.3401 140 21 108.66 21 70C21 31.3401 52.3401 0 91 0C129.66 0 161 31.3401 161 70Z" fill="#FF0000" fillOpacity="0.25"/>
            <path d="M140 172C140 210.66 108.66 242 70 242C31.3401 242 1.64986e-06 210.66 1.64986e-06 172C1.64986e-06 133.34 31.3401 102 70 102C108.66 102 140 133.34 140 172Z" fill="#0202FF" fillOpacity="0.25"/><circle cx="170" cy="140" r="70" transform="rotate(-1.63957 170 140)" fill="#169216" fillOpacity="0.25"/>
            </svg>
            <p className="section-intro">Learn from the best photography mentora with many years of experience. We prepared a large variety of courses for all skill levels. Choose from below courses the perfect one for you. Enjoy a lesson with a mentor in a friendly group and put your knowledge into practice.</p>
            <OurCoursesFilters />
            <div className="courses__section">
                {coursesList.length ? 
                <ul className="courses__list">
                    {coursesList}
                </ul> : <div><p className="courses__no-result-message">We could not find anything...</p></div>}
            </div>
            <div className="courses-contact">
                <h1 className="courses-contact__header">You didn't find what you need?</h1>
                <div>
                    <p className="courses-contact__description">We can design a course tailored to your expectations.</p>
                    <div className="courses-contact__link">
                        <p>Leave us a message</p>
                        <NavLink to="/contact">
                            <svg id="i-arrow-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="62" height="62" fill="none" stroke="currentcolor" strokeLinecap="butt" strokeLinejoin="mitter" strokeWidth="2.5"><path d="M22 6 L30 16 22 26 M30 16 L2 16" /></svg>
                        </NavLink>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default OurCourses;