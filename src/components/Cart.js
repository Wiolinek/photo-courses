import { useEffect } from 'react';
import { NavLink } from "react-router-dom";

import { useSelector } from 'react-redux';

import CartCoursesList from './CartCoursesList';

import '../styles/cart.css';

const Cart = () => {

    const { cart } = useSelector(state => state.cart);
    const totalAmount = useSelector(state => state.cart.totalAmount);

    useEffect(() => {
        window.scrollTo(0,0);
    },[])

    const coursesList = cart.map(course => <CartCoursesList key={course.course_id} course={course}/>)


    return (
        <section className="cart">
            <h1>You are now only one step from great photo adventure...</h1>
            {cart.length > 0 ? 
            <div>
                <div className="cart__menu">
                    <p className="cart__item-name">Course name</p>
                    <p className="cart__quantity">Quantity</p>
                    <p className="cart__price">Price</p>
                    <p className="cart__menu-remove">Remove</p>
                </div>
                <ul className="cart__list">
                    {coursesList}
                </ul>
                <p  className="cart__total-price">Total price: {totalAmount} EUR</p>
                <div className="cart__btn--section">
                    <NavLink className="btn cart__btn cart__btn--large" to="/our-courses">Continue shopping</NavLink>
                    <NavLink className="btn cart__btn cart__btn--large" to="/cart/checkout">Checkout</NavLink>
                </div>
            </div>
                : <div className="cart__empty-cart-message"><p>Check all our courses and choose perfect one for you..</p>
                    <NavLink className="" to="/our-courses"><svg id="i-arrow-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="62" height="62" fill="none" stroke="currentcolor" strokeLinecap="butt" strokeLinejoin="mitter" strokeWidth="2.5"><path d="M22 6 L30 16 22 26 M30 16 L2 16" /></svg></NavLink>
                    </div>}
        </section>
    )
}

export default Cart;