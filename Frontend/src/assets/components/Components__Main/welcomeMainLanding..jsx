// Images section Welcome
import WelcomeSVG1 from '../../svg/WelcomeInfo1.svg'
import WelcomeSVG2 from '../../svg/WelcomeInfo2.svg'
import WelcomeSVG3 from '../../svg/WelcomeInfo3.svg'
import mainSVG from '../../svg/mainWelcome.svg'

export default function WelcomeManinLanding(){
  return(
    <>
      <section className="main__welcome">
        <div className="main__welcome--info">
          <h1>Gana mientras estudias y forjas tu futuro</h1>
          <p>Aprende nuevas cosas mientras que tu dinero se incrementa</p>
          <button>
            <a href="#">Empezar</a>
          </button>
          <div className="main__welcome--info-svg">
            <div className="info__svg1">
              <img src={WelcomeSVG2} alt="Seguridad" />
              <p>Seguro y eficaz</p>
            </div>
            <div className="info__svg2">
              <img src={WelcomeSVG3} alt="Flexibidad" />
              <p>Flexible a tu ritmo 24/7</p>
            </div>
            <div className="info__svg3">
              <img src={WelcomeSVG1} alt="Mejor Metodologia" />
              <p>La mejor metodologia</p>
            </div>
          </div>
        </div>
        <div className="main__welcome--svg">
          <img src={mainSVG} alt="Unión hace la fuerza" />
        </div>
      </section>
    </>
  )
}