import Course from './Course';

import '../styles/our-teachers.css';


const OurTeachers = ( {teachers, courses}) => {

    teachers = teachers.map(teacher => ({...teacher, teacher_courses: teacher.teacher_courses.split(',').map(item => parseInt(item))}));

    let teachersList = teachers.map(teacher =>
        <div key={teacher.id} className='teachers-cart'>
            <div className='teachers-cart__details'>
                <img src={teacher.photo} alt={teacher.teacher_name} className='teachers-cart__img'></img>
                <div className='teachers-cart__info'>
                    <h2 className='teachers-cart__name'>{teacher.teacher_name}</h2>
                    <p className='teachers-cart__desc'>{teacher.description}</p>
                </div>
            </div>
            <div className='teachers-cart__courses'>
                <h3>Upcomming courses</h3>
                <ul className='teachers-cart__courses-list'>
                    {teachers && courses && teacher.teacher_courses.map(teacher_course => courses.map(course => teacher_course === course.id && <Course key={course.id} course={course}/>))}
                </ul>
            </div>  
        </div>
    )


    return (
        <section className='teachers'>
            <h1>Meet our instructors...</h1>
            <p className='teachers__intro'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel modi consequuntur omnis nisi magnam voluptate consectetur iure, placeat veritatis dolorum provident ab pariatur sequi! Dolor consequuntur molestiae explicabo sapiente impedit odit laborum architecto nam. Nemo ipsa odio vitae enim error, sapiente, ratione nisi corporis delectus doloremque optio nihil reprehenderit iure quaerat perspiciatis libero eius expedita temporibus! Laborum quae voluptatibus voluptas ut, sapiente repellat quaerat tempora fuga explicabo veritatis sit enim, culpa facere, eaque aperiam. At praesentium quidem illo eos ut, tempora repudiandae. Quos fugit non autem, dolores fuga accusamus tempore porro nihil similique labore eos exercitationem totam eum sequi optio.</p>
            <ul className='teachers__list'>{teachersList}</ul>
        </section>
    )
}

export default OurTeachers;