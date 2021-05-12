import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import '../styles/logIn.css';


const LogIn = () => {

    useEffect(() => {
        window.scrollTo(0,0);
    }, [])

    
    return (
        <section className="login">
            <div className="login__section">
                <h1>Registration</h1>
                <form className="login__form">
                    <label>Name and Surname<br/><input type="text" name="name" required></input></label>
                    <label>Email<br/><input type="email" name="mail" required></input></label>
                    <label>Password<br/><input type="password" name="password" required></input></label>
                    <label>Confirm password<br/><input type="password" name="confirm password" required></input></label>
                    <button className="btn login__btn" type="submit">Register</button>
                </form>
            </div>
            <div className="login__section">
                <h1>Login</h1>
                <form className="login__form">
                    <label>Email<br/><input type="email" name="mail" required></input></label>
                    <label>Password<br/><input type="password" name="password" required></input></label>
                    <button className="btn login__btn" type="submit">LogIn</button>
                    <NavLink className="login-section__reset-password" to="/">Reset password</NavLink>
                </form>
            </div>
        </section>
    )
}

export default LogIn;