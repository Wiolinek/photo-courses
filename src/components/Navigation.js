import { NavLink } from "react-router-dom";

import '../styles/navigation.css';


const Navigation = () => {

    return (
        <nav>
            <div className='logo'>photo passion</div>
            <ul className='nav-menu'>
                <li className='nav-menu-item'><NavLink to="/home/about-us">About Us</NavLink></li>
                <li className='nav-menu-item'><NavLink to="/home/our-teachers">Our Teachers</NavLink></li>
                <li className='nav-menu-item'><NavLink to="/home/our-courses">Our Courses</NavLink></li>
                <li className='nav-menu-item'><NavLink to="/home/contact">Contact</NavLink></li>
                <li className='nav-menu-icon'><NavLink to="/home/cart"><svg id="i-cart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                <path d="M6 6 L30 6 27 19 9 19 M27 23 L10 23 5 2 2 2" /><circle cx="25" cy="27" r="2" /><circle cx="12" cy="27" r="2" /></svg></NavLink>
                </li>
                <li className='nav-menu-icon'><NavLink to="/home/login"><svg id="i-user" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                <path d="M22 11 C22 16 19 20 16 20 13 20 10 16 10 11 10 6 12 3 16 3 20 3 22 6 22 11 Z M4 30 L28 30 C28 21 22 20 16 20 10 20 4 21 4 30 Z" /></svg></NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation;