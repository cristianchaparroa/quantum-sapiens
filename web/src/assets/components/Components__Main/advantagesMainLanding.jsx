// Images section Advantages
import AdvantagesSVG1 from '../../svg/AdvantagesInfo1.svg'
import AdvantagesSVG2 from '../../svg/AdvantagesInfo2.svg'
import AdvantagesSVG3 from '../../svg/AdvantagesInfo3.svg'
import advantagesImg from '../../img/LandingPage/imgComputer3.jpg'

export default function AdvantagesMainLanding(){
  return(
    <>
      <section className="main__advantages">
        <div className="main__advantages--svg">
          <img src={advantagesImg} alt="Union hace la fuerza" />
        </div>
        <div className="main__advantages--info">
          <h2>Creada para cualquiera de nosotros</h2>
          <p>Te enseñamos todo lo que tienes que saber sobre blockchain, financiación y desarrollo en el mundo cripto.</p>
          <ul className="main__advantages--info-list">
            <li>Finanzas personales</li>
            <li>Desarrollo web3</li>
            <li>Nuevas tecnologías</li>
            <li>Seguridad en la red</li>
            <li>Conocimientos basicos y avanados en blockchain</li>
          </ul>
          <div className="main__advantages--info-svg">
            <div className="info__svg1">
              <img src={AdvantagesSVG1} alt="Seguridad" />
              <p>Herramienta única</p>
            </div>
            <div className="info__svg2">
              <img src={AdvantagesSVG2} alt="Flexibidad" />
              <p>Archivo integrados</p>
            </div>
            <div className="info__svg3">
              <img src={AdvantagesSVG3} alt="Mejor Metodologia" />
              <p>Simple y sencillo</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}