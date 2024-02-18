// Hooks and libreries
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import 'animate.css';

// Imports
import iconBienestarTu from '../svg/iconBienestarTu.svg';
import iconUserLogin from '../svg/iconUserLanding.svg';
import iconArrow from '../svg/iconArrow.svg';
import '../sass/landingWeb/header.css';

export default function Header () {
  /* States */
  const [clickMove, setClickMove] = useState(false);
  const [clickMoveArrow, setClickMoveArrow] = useState(false);

  /* Classes */
  const classHover = clickMove === true ? 'burgerList' : 'inactive';
  const classMoveArrow = !clickMoveArrow ? '' : 'moveArrow';

  return (
    <header className="header">
      <div className="header__icon">
        <div className="header__icon--img">
          <img src={iconBienestarTu} alt="Icon Website" />  
        </div>
        <div className="header__icon--slogan">
          {/* Cambiar span y p por a */}
          <span>BienestarTu</span>
          <p>Salud Mental</p>
        </div>
      </div>
      <nav className="header__nav">
        <a href="#">Cursos</a>
        <a href="#">Suscripción</a>
        <a href="#">Sesiones Personalizada</a>
        <div className="header__nav--burger">
          <div className="header__nav--burger-info">
            <p 
            onClick={() => 
            {setClickMove(!clickMove), setClickMoveArrow(!clickMoveArrow)}
            }>Más</p>
            <img 
            className={classMoveArrow}
            src={iconArrow} 
            alt="Icon Arrow" />
          </div>
          <ul className={classHover}>
            <a href="#">Comunidad</a>
            <a href="#">Grupos</a>
            <a href="#">Blog</a>
            <a className='inactive itemActive' href="#">Cursos</a>
            <a className='inactive itemActive' href="#">Suscripción</a>
            <a href="#">Refer Friends</a>
            <a className='inactive itemActive' href="#">Sesiones Personalizada</a>
            <a href="#">Programa de Fidealización</a>
          </ul>
        </div>
      </nav>
      <div className="header__login">
        <div className="header__login--user">
          <img src={iconUserLogin} alt="Button Login" />
          <a href="#">Entra</a>
        </div>
        {/* Hacer que el button sea padre de a */}
        <a href="#">
          <button className='buttonSignUp'>Empezar</button>
        </a>
      </div>
    </header>
  )
}