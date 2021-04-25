import { useSelector, useDispatch } from 'react-redux';
import { increaseQuantity, decreaseQuantity, deleteFromCart } from '../redux/cartSlice';

import { NavLink } from "react-router-dom";



import '../styles/cart.css';

const Cart = () => {

    const { cart } = useSelector((state) => state.cart);
    const totalAmount = useSelector((state) => state.cart.totalAmount);
    const dispatch = useDispatch();

    const coursesList = cart.map(course => 
        <li key={course.id} className="cart__item">
            <p className="cart__item-name">{course.name}</p>
            <div className="cart__quantity">
                <button className="cart__btn" onClick={() => dispatch(decreaseQuantity(course))}><svg id="i-minus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="20" height="20" fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M2 16 L30 16" /></svg></button>
                <p>{course.quantity}</p>
                <button className="cart__btn" onClick={() => dispatch(increaseQuantity(course))}><svg id="i-plus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="20" height="20" fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 2 L16 30 M2 16 L30 16" /></svg></button>
            </div>
            <p className="cart__price">{course.quantity * course.price} EUR</p>
            <div className="cart__menu-remove">
                <button className="cart__btn" onClick={() => dispatch(deleteFromCart(course))}>
                <svg id="i-trash" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="20" height="20" fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M28 6 L6 6 8 30 24 30 26 6 4 6 M16 12 L16 24 M21 12 L20 24 M11 12 L12 24 M12 6 L13 2 19 2 20 6" /></svg>
                </button>
            </div>
        </li>)

    return (
        <section className="cart">
            <h1>You are now only one step from great photo adventure...</h1>
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
                <NavLink className="cart__btn cart__btn--large" to="/our-courses">Continue shopping</NavLink>
                <button className="cart__btn cart__btn--large">Checkout</button>
            </div>
        </section>
    )
    
}

export default Cart