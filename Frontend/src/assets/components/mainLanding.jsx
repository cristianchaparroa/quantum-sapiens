/* Components */
import WelcomeManinLanding from "./Components__Main/welcomeMainLanding."
import CoursesWebsite from "./Components__Main/courseMainLanding"
import AdvantagesMainLanding from "./Components__Main/advantagesMainLanding"
import ServicesMainLanding from "./Components__Main/servicesMainLanding"
import PricesMainLanding from "./Components__Main/pricesMainLanding"
import OpinionMainLanding from "./Components__Main/opinionsMainLanding"
import EndingMainLanding from "./Components__Main/endingMainLanding"

/* Images and SVGs */
// Images
import Image1 from '../img/MujeresFelices.jpg'

/* Styles */
import '../sass/landingWeb/mainLanding.css'

export default function MainLanding (){
  return (
    <>
      <main className="main">
        <WelcomeManinLanding />
        <section className="main__description--background">
          <section className="main__description">
            <div className="main__description--info">
              <h2>¡Únete a nosotros en este camino hacia una vida más feliz y saludable!</h2>
              <p>Nuestra plataforma de salud mental enseña herramientas terapéuticas para mejorar tu vida emocional. A través de nuestro programa, aprenderás habilidades para controlar el estrés y la ansiedad, superar patrones de pensamiento negativo y depresivos, mejorar tus relaciones interpersonales y más.</p>
            </div>
            <div className="main__description--video">
              <img src={Image1} alt="Mujeres Felices / Foto de Andrea Piacquadio" />
            </div>
          </section>
        </section>
        <CoursesWebsite />
        <AdvantagesMainLanding />
        <ServicesMainLanding />
        <PricesMainLanding />
        <OpinionMainLanding />
        <EndingMainLanding />
      </main>
    </>
  )
}