import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

import imgCourse from '../img/LandingPage/CourseImg1.jpg'

import '../styles/coursePresentation/coursePresentation.css'

export default function CoursePresentation1 (){
  return (
    <section className="main">
      <div className="course__container">
        <div className="course__container--info">
          <div className="course__container--info-title">
            <h2>Dominando Solana: Tu guía completa para la programación web3</h2>
            <span>10 clases</span>
          </div>
          <div className="course__container--info-about">
            <p>¡Embárcate en un viaje transformador con nuestro curso "Programación en Solana: Desarrolla dApps"! Descubre el emocionante mundo de la blockchain de Solana y desbloquea las habilidades para crear aplicaciones descentralizadas de alto rendimiento. ¿Listo para dar vida a tus ideas en el universo descentralizado? ¡Inscríbete ahora y haz que tu camino hacia el desarrollo blockchain sea tanto educativo como rentable! 🚀💻 #SolanaCodingRevolution</p>
          </div>
          <div className="course__container--info-price">
            <h3>Precio</h3>
            <p>Adquiere este curso con un pequeño presupuesto</p>
          </div>
          <div className="course__container--info-share">
            <p>Comparte este curso</p>
            <div className="icons__socialNetwork">
              <FaTwitter />
              <FaFacebook /> 
              <FaInstagram />
            </div>
          </div>
        </div>
        <div className="course__container--img">
          <img src={imgCourse} alt="Imagen del curso" />
        </div>
      </div>
    </section>
  )
}
