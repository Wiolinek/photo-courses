import dayjs from 'dayjs';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

import '../styles/course.css';


const Course = ( {course} ) => {

    const dispatch = useDispatch();


    return (
        <li className="course-cart" style={{ backgroundImage: `url(${course.photo_course})` }}>
            <div className="course-cart__basic-info">
                <h2 className="course-cart__name">{course.name}</h2>
                <p className="course-cart__level">{course.level}</p> 
            </div>
            <div className="course-cart__detail-info">
                <div className="course-cart__teacher">
                    <svg id="i-user" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="26" height="26" fill="none" stroke="currentcolor" strokeLinecap="butt" strokeLinejoin="mitter" strokeWidth="3"><path d="M22 11 C22 16 19 20 16 20 13 20 10 16 10 11 10 6 12 3 16 3 20 3 22 6 22 11 Z M4 30 L28 30 C28 21 22 20 16 20 10 20 4 21 4 30 Z" /></svg>
                    <p>{course.teacher_name}</p>
                </div>
                <div className="course-cart__duration">
                    <svg id="i-clock" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="26" height="26" fill="none" stroke="currentcolor" strokeLinecap="butt" strokeLinejoin="mitter" strokeWidth="3"><circle cx="16" cy="16" r="14" /><path d="M16 8 L16 16 20 20" /></svg>
                    <p>{course.duration}</p>
                </div>
                <div className="course-cart__date">
                    <svg id="i-calendar" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="26" height="26" fill="none" stroke="currentcolor" strokeLinecap="butt" strokeLinejoin="mitter" strokeWidth="3"><path d="M2 6 L2 30 30 30 30 6 Z M2 15 L30 15 M7 3 L7 9 M13 3 L13 9 M19 3 L19 9 M25 3 L25 9" /></svg>
                    <p >{dayjs(course.date).format('DD/MM/YYYY')}</p>
                </div>
                <div className="course-cart__place">
                    <svg id="i-location" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="28" height="28" fill="none" stroke="currentcolor" strokeLinecap="butt" strokeLinejoin="mitter" strokeWidth="3"><circle cx="16" cy="11" r="4" /><path d="M24 15 C21 22 16 30 16 30 16 30 11 22 8 15 5 8 10 2 16 2 22 2 27 8 24 15 Z" /></svg>
                    <p>{course.place}</p>
                </div>
                <div className="course-cart__buy">
                    <button className="btn" onClick={() => dispatch(addToCart(course))}>BUY</button>
                    <p>{course.price} EUR</p>
                </div>
            </div>
        </li>
    )
    
}

export default Course;