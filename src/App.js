import Navigation from './components/Navigation';
import AboutUs from './components/AboutUs';
import OurCourses from './components/OurCourses';
import OurTeachers from './components/OurTeachers';
import Contact from './components/Contact';
import Cart from './components/Cart';

import './app.css';


function App() {
  return (
    <>
      <main className='app'>
        <div className='logo'>photo passion</div>
        <div className='app_tagline'><p>“Photography is a way of feeling, of touching, of loving. What you have caught on film is captured forever…</p><p>It remembers little things, long after you have forgotten everything.”</p><p><span>— Aaron Siskind —</span></p></div>
        <button className='app__button' type="button">Check</button>
      </main>
      <Navigation className="navigation"/>
      <AboutUs className="about-us"/>
      <OurTeachers className="our-teachers"/>
      <OurCourses className="our-courses"/>
      <Contact className="contact"/>
      <Cart className="cart"/>
    </>
  );
}

export default App;
