// Hooks and libreries
import { useState } from 'react';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import 'animate.css';

// Imports
import IconQSapiens from '../svg/IconQSapiens.svg';
import iconUserLogin from '../svg/IconUserLanding.svg';
import iconArrow from '../svg/IconArrow.svg';

export default function Header ({ changePage }) {
  /* States */
  const [clickMove, setClickMove] = useState(false);
  const [clickMoveArrow, setClickMoveArrow] = useState(false);

  /* Classes */
  const classHover = clickMove === true ? 'burgerList' : 'inactive';
  const classMoveArrow = !clickMoveArrow ? '' : 'moveArrow';

  const customBtns = {
    height: '2rem',
    width: '2rem',
    border: 'none',
    backgroundColor: 'transparent',
    cursor: 'pointer',
    borderRadius: '9999px',
  }

  const nextCourse = () => {
    changePage(prev => prev >= 2 ? 0 : prev + 1);
  }
  const prevCourse = () => {
    changePage(prev => prev <= 0 ? 2 : prev - 1);
  }

  return (
    <header className="header">
      <div className="header__icon">
        <div className="header__icon--img" onClick={() => changePage(0)}>
          <img src={IconQSapiens} alt="Icon Website" />
        </div>
        <div className="header__icon--slogan" onClick={() => changePage(0)}>
          {/* Cambiar span y p por a */}
          <span>QuantiumSapiens</span>
          <p>Ganas mientras aprendes</p>
        </div>
        <button onClick={prevCourse} style={customBtns}>
          <FaArrowAltCircleLeft style={customBtns} />
        </button>
        <button onClick={nextCourse} style={customBtns}>
          <FaArrowAltCircleRight style={customBtns} />
        </button>
      </div>
      <nav className="header__nav">
        <a href="#" onClick={() => changePage(2)}>
          Cursos
        </a>
        <a href="#">Suscripción</a>
        <a href="#">Comunidad</a>
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
            <a href="#">Mis cursos</a>
            <a href="#">Blog</a>
            <a href="#">Perfil</a>
            <a href="#">Contenido</a>
          </ul>
        </div>
      </nav>
      <div className="header__login">
        <div className="header__login--user">
          <img src={iconUserLogin} alt="Button Login" />
          <a href="#">Mi info</a>
        </div>
        {/* Hacer que el button sea padre de a */}
      </div>
    </header>
  )
}