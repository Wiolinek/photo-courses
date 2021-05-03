import { useEffect } from 'react';
import '../styles/contact.css';
import Map from './Map';


const Contact = () => {

    const latBerlin = 52.50082077239646;
    const lngBerlin = 13.348808727264174;
    const latHamburg = 53.548712766408364;
    const lngHamburg = 9.945696156442432;

    useEffect(() => {
        window.scrollTo(0,0);
    },[])

    return (
        <section className="contact">
            <h1>Contact Us...</h1>
            <svg className="section-circle" width="200" height="200" viewBox="0 0 242 242" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M161 70C161 108.66 129.66 140 91 140C52.3401 140 21 108.66 21 70C21 31.3401 52.3401 0 91 0C129.66 0 161 31.3401 161 70Z" fill="#FF0000" fillOpacity="0.25"/>
            <path d="M140 172C140 210.66 108.66 242 70 242C31.3401 242 1.64986e-06 210.66 1.64986e-06 172C1.64986e-06 133.34 31.3401 102 70 102C108.66 102 140 133.34 140 172Z" fill="#0202FF" fillOpacity="0.25"/><circle cx="170" cy="140" r="70" transform="rotate(-1.63957 170 140)" fill="#169216" fillOpacity="0.25"/>
            </svg>
            <p className="section-intro contact__section-intro">We are at your service in two following locations:</p>
            <article className="contact__container">
                <div className="contact__details">
                    <p className="logo">photo passion</p>
                    <div className='contact__address'>
                        <svg id="i-home" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"><path d="M12 20 L12 30 4 30 4 12 16 2 28 12 28 30 20 30 20 20 Z" /></svg>
                        <p>Kleiststraße, 10787 Berlin </p>
                    </div>
                    <div className="contact__phone">
                        <svg id="i-telephone" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"><path d="M3 12 C3 5 10 5 16 5 22 5 29 5 29 12 29 20 22 11 22 11 L10 11 C10 11 3 20 3 12 Z M11 14 C11 14 6 19 6 28 L26 28 C26 19 21 14 21 14 L11 14 Z" /><circle cx="16" cy="21" r="4" /></svg>
                        <p>+49 865 586 321</p>
                    </div>
                    <div className="contact__mail">
                        <svg id="i-mail" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"><path d="M2 26 L30 26 30 6 2 6 Z M2 6 L16 16 30 6" /></svg>
                        <p>contact-berlin@photo-passion.com</p>
                    </div>
                </div>
                <div>
                    <Map lat={latBerlin} lng={lngBerlin}/>
                </div>
            </article>
            <article className="contact__container">
                <div className="contact__details">
                    <p className="logo">photo passion</p>
                    <div className='contact__address'>
                        <svg id="i-home" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"><path d="M12 20 L12 30 4 30 4 12 16 2 28 12 28 30 20 30 20 20 Z" /></svg>
                        <p>Königstraße, 22767 Hamburg</p>
                    </div>
                    <div className="contact__phone">
                        <svg id="i-telephone" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"><path d="M3 12 C3 5 10 5 16 5 22 5 29 5 29 12 29 20 22 11 22 11 L10 11 C10 11 3 20 3 12 Z M11 14 C11 14 6 19 6 28 L26 28 C26 19 21 14 21 14 L11 14 Z" /><circle cx="16" cy="21" r="4" /></svg>
                        <p>+49 568 685 123</p>
                    </div>
                    <div className="contact__mail">
                        <svg id="i-mail" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"><path d="M2 26 L30 26 30 6 2 6 Z M2 6 L16 16 30 6" /></svg>
                        <p>contact-hamburg@photo-passion.com</p>
                    </div>
                </div>
                <div>
                    <Map lat={latHamburg} lng={lngHamburg}/>
                </div>
            </article>
            <article className="contact__container">
                <div className="contact__form-section">
                    <p className="section-intro">Or leave us your message:</p>
                    <form className="contact__form">
                        <label>Name<br/><input type="text" name="name"></input></label>
                        <label>Email<br/><input type="email" name="mail"></input></label>
                        <label>Subject<br/><input type="text" name="subject"></input></label>
                        <label>Message<br/><textarea name="message" rows="6" cols="50"></textarea></label>
                        <button className="btn contact__btn" type="submit"><svg id="i-send" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M2 16 L30 2 16 30 12 20 Z M30 2 L12 20" /></svg>Send</button>
                    </form>
                </div>
                <div className="contact__circle">
                    <svg width="200" height="200" viewBox="0 0 242 242" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M161 70C161 108.66 129.66 140 91 140C52.3401 140 21 108.66 21 70C21 31.3401 52.3401 0 91 0C129.66 0 161 31.3401 161 70Z" fill="#FF0000" fillOpacity="0.25"/>
                    <path d="M140 172C140 210.66 108.66 242 70 242C31.3401 242 1.64986e-06 210.66 1.64986e-06 172C1.64986e-06 133.34 31.3401 102 70 102C108.66 102 140 133.34 140 172Z" fill="#0202FF" fillOpacity="0.25"/><circle cx="170" cy="140" r="70" transform="rotate(-1.63957 170 140)" fill="#169216" fillOpacity="0.25"/>
                    </svg>
                    <p className="section-intro">...our consultant will contact you as soon as possible</p>
                </div>
            </article>
        </section>
    )
    
}

export default Contact;