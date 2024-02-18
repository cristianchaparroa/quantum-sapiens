/* Components */
import WelcomeManinLanding from "./Components__Main/welcomeMainLanding."
import CoursesWebsite from "./Components__Main/courseMainLanding"
import AdvantagesMainLanding from "./Components__Main/advantagesMainLanding"
import ServicesMainLanding from "./Components__Main/servicesMainLanding"
import PricesMainLanding from "./Components__Main/pricesMainLanding"
import EndingMainLanding from "./Components__Main/endingMainLanding"

/* Images and SVGs */
// Images
import Image1 from '../img/MujeresFelices.jpg'

export default function MainLanding (){
  return (
    <>
      <main className="main">
        <WelcomeManinLanding />
        <section className="main__description--background">
          <section className="main__description">
            <div className="main__description--info">
              <h2>Estudiar es mucho mas sencillo cuando obtienes algo a cambio</h2>
              <p>Cada minuto que dedicas al estudio es una inversión en ti mismo. Nuestro innovador sistema recompensa tu esfuerzo académico. A medida que te sumerges en cursos y adquieres nuevos conocimientos, tu inversión inicial se multiplica. ¡Aprender se convierte en una experiencia lucrativa!</p>
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
        <EndingMainLanding />
      </main>
    </>
  )
}