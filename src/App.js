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
  return (
    <Router>
      <Route path="/" exact component={Main}>
        <Main/>
      </Route>
      <Route path="/home/" component={Navigation}>
          <Navigation/>
      </Route>
      <Route path="/home/about-us" component={AboutUs}>
          <AboutUs/>
      </Route>
      <Route path="/home/our-teachers" component={OurTeachers}>
          <OurTeachers/>
      </Route>
      <Route path="/home/our-courses" component={OurCourses}>
          <OurCourses/>
      </Route>
      <Route path="/home/contact" component={Contact}>
          <Contact/>
      </Route>
      <Route path="/home/cart" component={Cart}>
          <Cart/>
      </Route>
      <Route path="/home/" component={Footer}>
          <Footer/>
      </Route>
    </Router>
  );
}

export default App;
