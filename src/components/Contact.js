import { useEffect } from 'react';

import Map from './Map';
import ContactAddress from './ContactAddress';

import '../styles/contact.css';


const Contact = () => {

    const BerlinAddress = {
        name: 'photo passion',
        address: 'Kleiststraße, 10787 Berlin',
        phone: '+49 865 586 321',
        email: 'contact-berlin@photo-passion.com'
    }

    const HamburgAddress = {
        name: 'photo passion',
        address: 'Königstraße, 22767 Hamburg',
        phone: '+49 568 685 123',
        email: 'contact-hamburg@photo-passion.com',
    }

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
                <ContactAddress name={BerlinAddress.name} address={BerlinAddress.address} phone={BerlinAddress.phone} email={BerlinAddress.email}/>
                <div>
                    <Map lat={latBerlin} lng={lngBerlin}/>
                </div>
            </article>
            <article className="contact__container">
                <ContactAddress name={HamburgAddress.name} address={HamburgAddress.address} phone={HamburgAddress.phone} email={HamburgAddress.email}/>
                <div>
                    <Map lat={latHamburg} lng={lngHamburg}/>
                </div>
            </article>
            <article className="contact__container">
                <div className="contact__form-section">
                    <p className="section-intro">Or leave us your message:</p>
                    <form className="contact__form">
                        <label>Name<br/><input type="text" name="name" required></input></label>
                        <label>Email<br/><input type="email" name="mail" required></input></label>
                        <label>Subject<br/><input type="text" name="subject" required></input></label>
                        <label>Message<br/><textarea name="message" rows="6" cols="50" required></textarea></label>
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