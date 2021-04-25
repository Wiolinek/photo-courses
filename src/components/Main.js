import Gallery from './Gallery';

import { NavLink } from "react-router-dom";

import '../styles/main.css';


const Main = ( {teachersData} ) => {
  
  const teachersOpinions = teachersData.map(teacher =>
    <li key={teacher.id} className="main__instructor-item">
      <div className="main__instructor-item-container">
        <img src={teacher.photo} alt={teacher.teacher_name} className="main__instructor-img"></img>
        <h1 className="main__instructor-name">{teacher.teacher_name}</h1>
      </div>
      <p className="main__instructor-testimonial">{teacher.testimonial}</p>
    </li>
  )


  return (
      <main className="main">
        <div className="main__tagline">
          <p>“Photography is a way of feeling, of touching, of loving. What you have caught on film is captured forever… <br/>It remembers little things, long after you have forgotten everything.”</p>
          <p>— Aaron Siskind —</p></div>
        <div className="main__advantages">
          <div>
            <i className="fas fa-glasses"></i>
            <svg width="140" height="140" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M140 70C140 108.66 108.66 140 70 140C31.3401 140 0 108.66 0 70C0 31.3401 31.3401 0 70 0C108.66 0 140 31.3401 140 70Z" fill="#FF0000" fillOpacity="0.25"/>
              </svg>
            <h1 className="main__header">Learn your way</h1>
            <p className="main__description">Choose from our vast offer of on-line and stacionary classes.</p>
          </div>
          <div>
            <i className="fas fa-hourglass-start"></i>
            <svg width="140" height="140" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M140 70C140 108.66 108.66 140 70 140C31.3401 140 0 108.66 0 70C0 31.3401 31.3401 0 70 0C108.66 0 140 31.3401 140 70Z" fill="#169216" fillOpacity="0.25"/>
            </svg>
            <h1 className="main__header">Set your own pace</h1>
            <p className="main__description">Thanks to our great on-line courses you can learn whenever and wherever you want.</p>
          </div>
          <div>
            <i className="fas fa-graduation-cap"></i>
            <svg width="140" height="140" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M140 70C140 108.66 108.66 140 70 140C31.3401 140 0 108.66 0 70C0 31.3401 31.3401 0 70 0C108.66 0 140 31.3401 140 70Z" fill="#0202FF" fillOpacity="0.25"/>
            </svg>
            <h1 className="main__header">Build up your skills</h1>
            <p className="main__description">Search our offer and find course fit to your interests.</p>
          </div>
        </div>
        <div className="main__instructors">
          <h1 className="main__header">The best photography instructors on your demand</h1>
          <p className="main__description">Great awards winners and world-renowned photographers. Meet them and pick your future photography master.</p>
          <ul className="main__instructors-list">{teachersOpinions}</ul>
          <div className="main__learn-more">
            <p>Learn more about our teachers</p>
            <NavLink to="/our-teachers">
              <svg id="i-arrow-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="62" height="62" fill="none" stroke="currentcolor" strokeLinecap="butt" strokeLinejoin="mitter" strokeWidth="2.5"><path d="M22 6 L30 16 22 26 M30 16 L2 16" /></svg>
            </NavLink>
          </div>
        </div>
        <div className="main__students">
          <h1 className="main__header">Our students' work</h1>
          <p className="main__description">Check what a great work was made by our students. You can be one of them!</p>
          <Gallery />
          <div className="main__learn-more">
            <p>Find a perfect course for you</p>
            <NavLink to="/our-courses">
              <svg id="i-arrow-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="62" height="62" fill="none" stroke="currentcolor" strokeLinecap="butt" strokeLinejoin="mitter" strokeWidth="2.5"><path d="M22 6 L30 16 22 26 M30 16 L2 16" /></svg>
            </NavLink>
          </div>
        </div>
        <div className="main__tagline main__tagline--bottom">
          <p>“Don’t shoot what it looks like. Shoot what it feels like.”</p>
          <p>— David Alan Harvey —</p>
        </div>
      </main>
  );
}

export default Main;