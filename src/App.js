import { useEffect, useState } from 'react';

import Navigation from './components/Navigation';
import AboutUs from './components/AboutUs';
import OurCourses from './components/OurCourses';
import OurTeachers from './components/OurTeachers';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Cart from './components/Cart';
import Main from './components/Main';

import { BrowserRouter as Router, Route } from "react-router-dom";

import './app.css';


const App = () => {

  const [teachers, setTeachers] = useState([]);
  const [courses, setCourses] = useState([]);
  

  useEffect(() => {
    fetch(`http://localhost:3030/teachers`)
    .then(response => response.json())
    .then(result => setTeachers(result))
    .catch(error => console.log(`error ${error}`))
  }, []);

  useEffect(() => {
      fetch(`http://localhost:3030/courses`)
      .then(response => response.json())
      .then(result => setCourses(result))
      .catch(error => console.log(`error ${error}`))
  }, []);


  return (
    <Router>
      <Route path="/" exact component={Main}>
        <Main teachers={teachers}/>
      </Route>
      <Route path="/" component={Navigation}>
          <Navigation/>
      </Route>
      <Route path="/about-us" component={AboutUs}>
          <AboutUs/>
      </Route>
      <Route path="/our-teachers" component={OurTeachers}>
          <OurTeachers teachers={teachers} courses={courses}/>
      </Route>
      <Route path="/our-courses" component={OurCourses}>
          <OurCourses teachers={teachers} courses={courses}/>
      </Route>
      <Route path="/contact" component={Contact}>
          <Contact/>
      </Route>
      <Route path="/cart" component={Cart}>
          <Cart/>
      </Route>
      <Route path="/" component={Footer}>
          <Footer/>
      </Route>
    </Router>
  );
}

export default App;
