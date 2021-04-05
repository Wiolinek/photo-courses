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
            <svg width="140" height="140" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M140 70C140 108.66 108.66 140 70 140C31.3401 140 0 108.66 0 70C0 31.3401 31.3401 0 70 0C108.66 0 140 31.3401 140 70Z" fill="#FF0000" fill-opacity="0.25"/>
              </svg>
            <h1 className='main__header'>Learn your way</h1>
            <p className='main__description'>Choose from our vast offer of on-line and stacionary classes.</p>
          </div>
          <div>
            <i className="fas fa-hourglass-start"></i>
            <svg width="140" height="140" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M140 70C140 108.66 108.66 140 70 140C31.3401 140 0 108.66 0 70C0 31.3401 31.3401 0 70 0C108.66 0 140 31.3401 140 70Z" fill="#169216" fill-opacity="0.25"/>
            </svg>
            <h1 className='main__header'>Set your own pace</h1>
            <p className='main__description'>Thanks to our great on-line courses you can learn whenever and wherever you want.</p>
          </div>
          <div>
            <i className="fas fa-graduation-cap"></i>
            <svg width="140" height="140" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M140 70C140 108.66 108.66 140 70 140C31.3401 140 0 108.66 0 70C0 31.3401 31.3401 0 70 0C108.66 0 140 31.3401 140 70Z" fill="#0202FF" fill-opacity="0.25"/>
            </svg>
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