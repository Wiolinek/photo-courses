import { NavLink } from "react-router-dom";

import '../styles/main.css';


const Main = () => {
  return (
      <main className='main'>
        <div className='logo'>photo passion</div>
        <div className='main_tagline'><p>“Photography is a way of feeling, of touching, of loving. What you have caught on film is captured forever…</p><p>It remembers little things, long after you have forgotten everything.”</p><p><span>— Aaron Siskind —</span></p></div>
        <button className='main__button' type="button"><NavLink to="/home/about-us">Check</NavLink></button>
      </main>
  );
}

export default Main;