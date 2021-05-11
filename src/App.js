import { useEffect, useState } from 'react';

import Main from './components/Main';
import Navigation from './components/Navigation';
import AboutUs from './components/AboutUs';
import OurCourses from './components/OurCourses';
import OurTeachers from './components/OurTeachers';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import LogIn from './components/LogIn';

import { BrowserRouter as Router, Route } from "react-router-dom";

import './app.css';


const App = () => {

  const [teachersData, setTeachersData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3030/teachers`)
    .then(response => response.json())
    .then(result => setTeachersData(result))
    .catch(error => console.log(`error ${error}`))
  }, []);


  return (
    <Router>
      <Route path="/" component={Navigation}>
          <Navigation />
      </Route>
      <Route path="/" exact component={Main}>
        <Main teachersData={teachersData}/>
      </Route>
      <Route path="/about-us" component={AboutUs}>
          <AboutUs />
      </Route>
      <Route path="/our-teachers" component={OurTeachers}>
          <OurTeachers teachersData={teachersData}/>
      </Route>
      <Route path="/our-courses" component={OurCourses}>
          <OurCourses teachersData={teachersData}/>
      </Route>
      <Route path="/contact" component={Contact}>
          <Contact />
      </Route>
      <Route path="/cart" exact component={Cart}>
          <Cart />
      </Route>
      <Route path="/cart/checkout" component={Checkout}>
          <Checkout />
      </Route>
      <Route path="/login" component={LogIn}>
          <LogIn />
      </Route>
      <Route path="/" component={Footer}>
          <Footer />
      </Route>
    </Router>
  );
}

export default App;
