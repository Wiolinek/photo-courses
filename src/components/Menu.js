
import { NavLink } from 'react-router-dom';

import '../styles/menu.css';


const Menu = ( { menuState, setMenuState } ) => {

    
    return (
        <div className="menu" style={{display: menuState ? "flex" : "none"}}>
            <ul className="menu__list">
                <li className="menu__item" onClick={() => setMenuState(false)}><NavLink to="/about-us">About Us</NavLink></li>
                <li className="menu__item" onClick={() => setMenuState(false)}><NavLink to="/our-teachers">Our Teachers</NavLink></li>
                <li className="menu__item" onClick={() => setMenuState(false)}><NavLink to="/our-courses">Our Courses</NavLink></li>
                <li className="menu__item" onClick={() => setMenuState(false)}><NavLink to="/contact">Contact</NavLink></li>
            </ul>
        </div>
    )
}

export default Menu;