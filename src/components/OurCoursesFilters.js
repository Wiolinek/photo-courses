import { useSelector, useDispatch } from 'react-redux';

import { filterCourses, selectCourses, selectTeacherFilter, selectLevelFilter, selectLocationFilter, getFilteredCourses } from '../redux/coursesSlice';

import '../styles/our-courses-filters.css';


const OurCoursesFilters = () => {


    const { courses } = useSelector(selectCourses);
    const teacherFilter = useSelector(selectTeacherFilter);
    const levelFilter = useSelector(selectLevelFilter);
    const locationFilter = useSelector(selectLocationFilter);

    const dispatch = useDispatch();

    const setFiltersHandler = (e) => {
        dispatch(filterCourses({value: e.target.value, type: e.target.dataset.type}));
        dispatch(getFilteredCourses({teacherFilter: teacherFilter, levelFilter: levelFilter, locationFilter: locationFilter}));
    }

    const removeDuplicates = filtersArray => {
        return [...new Set(filtersArray)]
    }

    const createOption = table => {
        return table.map(item => <option key={item} value={item}>{item}</option>)
    }

    const teachers = removeDuplicates(courses.map(teacher => teacher.teacher_name))
    const teachersList = ["All", ...teachers];
    const filterTeachersList = createOption(teachersList);
    
    const levels = removeDuplicates(courses.map(course => course.level))
    const levelsList = ["All", ...levels];
    const filterLevelsList = createOption(levelsList);

    const locations = removeDuplicates(courses.map(course => course.place))
    const locationsList = ["All", ...locations]
    const filterLocationsList = createOption(locationsList);


    return (
            <div className="courses__filters">
                <svg id="i-filter" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="60" height="60" fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M2 5 C2 5 6 3 16 3 26 3 30 5 30 5 L19 18 19 27 13 30 13 18 2 5Z" /></svg>
                <label>Teachers:
                    <select name="teachers" data-type="teacherFilter" onChange={setFiltersHandler}>
                        {filterTeachersList}
                    </select>
                </label>
                <label>Course level:
                    <select name="course level" data-type="levelFilter" onChange={setFiltersHandler}>
                        {filterLevelsList}
                    </select>
                </label>
                <label>Location:
                    <select name="location" data-type="locationFilter" onChange={setFiltersHandler}>
                        {filterLocationsList}
                    </select> 
                </label>
            </div>
    )

}

export default OurCoursesFilters;