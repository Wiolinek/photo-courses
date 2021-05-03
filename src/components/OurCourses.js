import { NavLink } from "react-router-dom";
import { useEffect } from "react";

import '../styles/our-courses.css';

import Course from './Course';

import { useSelector, useDispatch } from 'react-redux';
import { filterCourses, selectFilteredCourses, getCourses } from '../redux/coursesSlice';


const OurCourses = () => {

    const filteredCourses = useSelector(selectFilteredCourses);
    console.log(filteredCourses)

    const dispatch = useDispatch();  

    useEffect(() => {
        dispatch(getCourses())
        console.log('pobieram kursy z our courses')
    }, [dispatch]);    

    const removeDuplicates = filtersArray => {
        return [...new Set(filtersArray)]
    }

    const createOption = table => {
        return table.map(item => <option key={item} value={item}>{item}</option>)
    }

    const teachers = removeDuplicates(filteredCourses.map(teacher => teacher.teacher_name))
    const teachersList = ["All", ...teachers];
    const filterTeachersList = createOption(teachersList);
    
    const levels = removeDuplicates(filteredCourses.map(course => course.level))
    const levelsList = ["All", ...levels];
    const filterLevelsList = createOption(levelsList);

    const locations = removeDuplicates(filteredCourses.map(course => course.place))
    const locationsList = ["All", ...locations]
    const filterLocationsList = createOption(locationsList);

    const coursesList = (filteredCourses.map(course =>
            <Course key={course.course_id} course={course}/>))


    return (
        <section className="courses">
            <h1>Choose one of our courses...</h1>
            <svg className="section-circle" width="200" height="200" viewBox="0 0 242 242" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M161 70C161 108.66 129.66 140 91 140C52.3401 140 21 108.66 21 70C21 31.3401 52.3401 0 91 0C129.66 0 161 31.3401 161 70Z" fill="#FF0000" fillOpacity="0.25"/>
            <path d="M140 172C140 210.66 108.66 242 70 242C31.3401 242 1.64986e-06 210.66 1.64986e-06 172C1.64986e-06 133.34 31.3401 102 70 102C108.66 102 140 133.34 140 172Z" fill="#0202FF" fillOpacity="0.25"/><circle cx="170" cy="140" r="70" transform="rotate(-1.63957 170 140)" fill="#169216" fillOpacity="0.25"/>
            </svg>
            <p className="section-intro">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit ullam ex eos sunt cupiditate eligendi odit ratione obcaecati saepe non rerum voluptatibus harum commodi, delectus odio doloribus, recusandae deleniti fuga. Minus praesentium quidem nam quae error blanditiis nesciunt nostrum dolore. Ut quam nemo vero impedit est quod sit commodi, ad qui at inventore adipisci laborum labore fugiat dolore neque non pariatur id voluptas rem, deserunt quidem vitae! Esse, id reiciendis accusantium assumenda ipsa aliquid asperiores, voluptates quisquam iusto pariatur suscipit culpa sit laboriosam molestiae excepturi qui repellendus iste, quasi similique! Hic quaerat enim labore ullam nobis deleniti, ratione maiores soluta.</p>
            <div className="courses__filters">
                <svg id="i-filter" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="60" height="60" fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M2 5 C2 5 6 3 16 3 26 3 30 5 30 5 L19 18 19 27 13 30 13 18 2 5Z" /></svg>
                <label>Teachers:
                    <select name="teachers" onChange={(e) => dispatch(filterCourses({value: e.target.value, type: 'teacherFilter'}))}>
                        {filterTeachersList}
                    </select>
                </label>
                <label>Course level:
                    <select name="course level" onChange={(e) => dispatch(filterCourses({value: e.target.value, type: 'levelFilter'}))}>
                        {filterLevelsList}
                    </select>
                </label>
                <label>Location:
                    <select name="location" onChange={(e) => dispatch(filterCourses({value: e.target.value, type: 'locationFilter'}))}>
                        {filterLocationsList}
                    </select> 
                </label>
            </div>
            {coursesList.length ? 
            <ul className="courses__list">{coursesList}</ul> : null}
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