import { useEffect } from 'react';

import { NavLink } from "react-router-dom";

import { useSelector, useDispatch } from 'react-redux';

import { emptyCart } from '../redux/cartSlice';


import '../styles/checkout.css';

const Checkout = () => {

    const { cart } = useSelector((state) => state.cart);
    const totalAmount = useSelector((state) => state.cart.totalAmount);
    const dispatch = useDispatch();

    useEffect(() => {
        window.scrollTo(0,0);
    },[])

    const coursesList = cart.map(course => 
        <li key={course.id} className="checkout__item">
            <p className="checkout__item-name">{course.name}</p>
            <p className="checkout__quantity">{course.quantity}</p>
            <p className="checkout__price">{course.quantity * course.price} EUR</p>
        </li>)

    return (
        <section className="checkout">
            <div>
                <h1>Order summary</h1>
                <div>
                    <div className="checkout__menu">
                        <p className="checkout__item-name">Course name</p>
                        <p className="checkout__quantity">Quantity</p>
                        <p className="checkout__price">Price</p>
                    </div>
                    <ul className="checkout__list">
                        {coursesList}
                    </ul>
                    <p  className="checkout__total-price">Total price: {totalAmount} EUR</p>
                </div>
                <NavLink className="btn checkout__btn checkout__btn--large" to="/cart">Back to Cart</NavLink>
            </div>
            <div>
                <h1>Address details</h1>
                <div className="checkout__form-section">
                    <form className="checkout__form">
                        <label>Name and Surname<br/><input type="text" name="name" required></input></label>
                        <label>Email<br/><input type="email" name="mail" required></input></label>
                        <label>Street<br/><input type="text" name="street" required></input></label>
                        <label>Number<br/><input type="number" name="number" required></input></label>
                        <label>Zip code<br/><input type="number" name="number" required></input></label>
                        <label>City<br/><input type="text" name="city" required></input></label>
                    </form>
                </div>
                <button type="submit"className="btn checkout__btn checkout__btn--large" onClick={() => dispatch(emptyCart())}>Buy</button>
            </div>
        </section>
    )
    
}

export default Checkout;