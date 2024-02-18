/* Components */
import CoursesWebsite from "./Components__Main/courseMainLanding"
import PricesMainLanding from "./Components__Main/pricesMainLanding"
import EndingMainLanding from "./Components__Main/endingMainLanding"
import WelcomeManinLanding from "./Components__Main/welcomeMainLanding"
import ServicesMainLanding from "./Components__Main/servicesMainLanding"
import AdvantagesMainLanding from "./Components__Main/advantagesMainLanding"

/* Images and SVGs */
// Images
import Image1 from '../img/LandingPage/imgExplorer.jpg'

export default function MainLanding ({ changePage }) {
  return (
    <>
      <main className="main">
        <WelcomeManinLanding changePage={changePage} />
        <section className="main__description--background">
          <section className="main__description">
            <div className="main__description--info">
              <h2>Estudiar es mucho mas sencillo cuando obtienes algo a cambio</h2>
              <p>Cada minuto que dedicas al estudio es una inversión en ti mismo. Nuestro innovador sistema recompensa tu esfuerzo académico. A medida que te sumerges en cursos y adquieres nuevos conocimientos, tu inversión inicial se multiplica. ¡Aprender se convierte en una experiencia lucrativa!</p>
            </div>
            <div className="main__description--video">
              <img src={Image1} alt="Hombre futurista mirando al frente" />
            </div>
          </section>
        </section>
        <CoursesWebsite changePage={changePage} />
        <AdvantagesMainLanding />
        <ServicesMainLanding />
        {/* <PricesMainLanding /> */}
        <EndingMainLanding />
      </main>
    </>
  )
}