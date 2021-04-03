import '../styles/main.css';


const Main = ( {teachers} ) => {
  
  const teachersOpinions = teachers.map(teacher =>
    <li key={teacher.id} className='main__instructor-item'>
      <div className='main__instructor-item-container'>
        <img src={teacher.photo} alt={teacher.teacher_name} className='main__instructor-img'></img>
        <h1 className='main__instructor-name'>{teacher.teacher_name}</h1>
      </div>
      <p className='main__instructor-testimonial'>{teacher.testimonial}</p>
    </li>
  )


  return (
      <main className='main'>
        <div className='main__tagline'>
          <p>“Photography is a way of feeling, of touching, of loving. What you have caught on film is captured forever… <br/>It remembers little things, long after you have forgotten everything.”</p>
          <p>— Aaron Siskind —</p></div>
        {/* <button className='main__button' type="button"><NavLink to="/about-us">Check</NavLink></button> */}
        <div className='main__advantages'>
          <div>
            <i className="fas fa-glasses"></i>
            <h1 className='main__header'>Learn your way</h1>
            <p className='main__description'>Choose from our vast offer of on-line and stacionary classes.</p>
          </div>
          <div>
            <i className="fas fa-hourglass-start"></i>
            <h1 className='main__header'>Set your own pace</h1>
            <p className='main__description'>Thanks to our great on-line courses you can learn whenever and wherever you want.</p>
          </div>
          <div>
            <i className="fas fa-graduation-cap"></i>
            <h1 className='main__header'>Build up your skills</h1>
            <p className='main__description'>Search our offer and find course fit to your interests.</p>
          </div>
        </div>
        <div className='main__instructors'>
          <h1 className='main__header'>The best photography instructors on your demand</h1>
          <p className='main__description'>Great awards winners and world-renowned photographers. Meet them and pick your future photography master.</p>
          <ul className='main__instructors-list'>{teachersOpinions}</ul>
        </div>
        <div className='main__students'>
          <h1 className='main__header'>Our students' work</h1>
          <p className='main__description'>Check what a great work was made by our students. You can be one of them!</p>
          <div></div>
        </div>
        <div className='main__fourth'>
          <h1 className='main__header'>a</h1>
          <p className='main__description'>4</p>
        </div>
      </main>
  );
}

export default Main;