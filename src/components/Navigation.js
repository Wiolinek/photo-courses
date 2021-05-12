import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { selectItemsQuantity } from '../redux/cartSlice';

import Menu from './Menu';

import '../styles/navigation.css';


const Navigation = () => {

    const [menuState, setMenuState] = useState(false);
    const itemsQuantity = useSelector(selectItemsQuantity);

    const showHideMenuHandler = () => {
        setMenuState(!menuState);
    }

    const hideMenuHandler = () => {
        if(window.innerWidth > 1180 && menuState === true) {
            setMenuState(false);
        }
    }

    useEffect(() => {
        window.addEventListener("resize", hideMenuHandler);
    });
    
    
    return (
        <nav>
            <div className="logo"><NavLink to="/">photo passion</NavLink></div>
            <ul className="nav__menu">
                <li className="nav__item"><NavLink to="/about-us">About Us</NavLink></li>
                <li className="nav__item"><NavLink to="/our-teachers">Our Teachers</NavLink></li>
                <li className="nav__item"><NavLink to="/our-courses">Our Courses</NavLink></li>
                <li className="nav__item"><NavLink to="/contact">Contact</NavLink></li>
                <li className="nav__icon">
                    <p>{itemsQuantity}</p>
                    <NavLink to="/cart"><svg id="i-cart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="30" height="30" fill="none" stroke="currentcolor" strokeLinecap="butt" strokeLinejoin="mitter" strokeWidth="2.5"><path d="M6 6 L30 6 27 19 9 19 M27 23 L10 23 5 2 2 2" /><circle cx="25" cy="27" r="2" />
                    <circle cx="12" cy="27" r="2" /></svg></NavLink>
                </li>
                <li className="nav__icon">
                    <NavLink to="/login"><svg id="i-user" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="30" height="30" fill="none" stroke="currentcolor" strokeLinecap="butt" strokeLinejoin="mitter" strokeWidth="2.5">
                    <path d="M22 11 C22 16 19 20 16 20 13 20 10 16 10 11 10 6 12 3 16 3 20 3 22 6 22 11 Z M4 30 L28 30 C28 21 22 20 16 20 10 20 4 21 4 30 Z" /></svg></NavLink>
                </li>
                <li className="nav__icon nav__icon--hidden" onClick={showHideMenuHandler}>
                    {menuState ? <svg id="i-close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" strokeLinecap="butt" strokeLinejoin="mitter" strokeWidth="2.5"><path d="M2 26 L26 2 M26 26 L2 2" /></svg> : <svg id="i-menu" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" strokeLinecap="butt" strokeLinejoin="mitter" strokeWidth="2.5"><path d="M4 8 L30 8 M4 16 L30 16 M4 24 L30 24" /></svg>}
                </li>
            </ul>
            <Menu menuState={menuState} setMenuState={setMenuState}/>
        </nav>
    )
}

export default Navigation;