import Navigation from './components/Navigation';
import AboutUs from './components/AboutUs';
import OurCourses from './components/OurCourses';
import OurTeachers from './components/OurTeachers';
import Contact from './components/Contact';
import Cart from './components/Cart';

import Main from './components/Main';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './app.css';


const App = () => {
  return (
    <Router>
      <Route path="/" exact component={Main}>
        <Main/>
      </Route>
      <Route path="/home/" component={Navigation}>
          <Navigation className="navigation"/>
      </Route>
      <Route path="/home/about-us" component={AboutUs}>
          <AboutUs className="about-us"/>
      </Route>
      <Route path="/home/our-teachers" component={OurTeachers}>
          <OurTeachers className="our-teachers"/>
      </Route>
      <Route path="/home/our-courses" component={OurCourses}>
          <OurCourses className="our-courses" />
      </Route>
      <Route path="/home/contact" component={Contact}>
          <Contact className="contact"/>
      </Route>
      <Route path="/home/cart" component={Cart}>
          <Cart className="cart"/>
      </Route>
    </Router>
  );
}

export default App;
