// Hooks and libreries
import { useState } from 'react';
import 'animate.css';
import Connect2Phantom from "./Connect2Phantom";

// Imports
//import IconQSapiens from '../svg/iconQSapiens.svg';
// import iconUserLogin from '../svg/iconUserLanding.svg';
// import iconArrow from '../svg/iconArrow.svg';

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
          {/*<img src={IconQSapiens} alt="Icon Website" />*/}
        </div>
        <div className="header__icon--slogan">
          {/* Cambiar span y p por a */}
          <span>QuantiumSapiens</span>
          <p>Ganas mientras aprendes</p>
        </div>
      </div>
      <nav className="header__nav">

        <a href="#">Cursos</a>
        <a href="#">Suscripción</a>
        <a href="#">Comunidad</a>
        <div className="header__nav--burger">
          <div className="header__nav--burger-info">
            <p
            onClick={() =>
            {setClickMove(!clickMove), setClickMoveArrow(!clickMoveArrow)}
            }>Más</p>
            {/*<img*/}
            {/*className={classMoveArrow}*/}
            {/*src={iconArrow}*/}
            {/*alt="Icon Arrow" />*/}
          </div>
          <ul className={classHover}>
            <a href="#">Mis cursos</a>
            <a href="#">Blog</a>
            <a href="#">Perfil</a>
            <a href="#">Contenido</a>
          </ul>
        </div>
        <Connect2Phantom />
      </nav>
      <div className="header__login">
        <div className="header__login--user">
          {/*<img src={iconUserLogin} alt="Button Login" />*/}
          <a href="#">Mi info</a>
        </div>
        {/* Hacer que el button sea padre de a */}
      </div>
    </header>
  )
}
