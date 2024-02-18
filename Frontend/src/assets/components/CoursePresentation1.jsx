import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

export default function CoursePresentation1 (){
  return (
    <section className="main">
      <div className="course__container">
        <div className="course__container--info">
          <div className="course__container--info-title">
            <h2>Curso de Blockchain</h2>
            <span>10 clases</span>
          </div>
          <div className="course__container--info-about">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="course__container--info-price">
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
        <div className="course__container--img"></div>
      </div>
    </section>
  )
}
