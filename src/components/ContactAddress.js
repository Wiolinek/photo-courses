import '../styles/contact-address.css';


const ContactAddress = ( { name, address, phone, email } ) => {

    
    return (
        <div className="contact__details">
            <p className="logo">{name}</p>
            <div className="contact__address">
                <svg id="i-home" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"><path d="M12 20 L12 30 4 30 4 12 16 2 28 12 28 30 20 30 20 20 Z" /></svg>
                <p>{address}</p>
            </div>
            <div className="contact__phone">
                <svg id="i-telephone" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"><path d="M3 12 C3 5 10 5 16 5 22 5 29 5 29 12 29 20 22 11 22 11 L10 11 C10 11 3 20 3 12 Z M11 14 C11 14 6 19 6 28 L26 28 C26 19 21 14 21 14 L11 14 Z" /><circle cx="16" cy="21" r="4" /></svg>
                <p>{phone}</p>
            </div>
            <div className="contact__mail">
                <svg id="i-mail" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"><path d="M2 26 L30 26 30 6 2 6 Z M2 6 L16 16 30 6" /></svg>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default ContactAddress;