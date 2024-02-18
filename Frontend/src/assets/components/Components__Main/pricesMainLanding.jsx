/* SVGs */
import checkSVG from '../../svg/CheckInfo.svg'

export default function PricesMainLanding () {
  return(
    <>
      <section className="main__memberships">
        <section className="main__memberships--container">
          <div className="main__memberships--container-cards">
            <div className="card__info">
              <div className="card__info--title">
                <h3>Prueba Gratuita</h3>
              </div>
              <div className="card__info--price">
                <p>US$</p>
                <span>0</span>
              </div>
              <div className="card__info--period">
                <p>Prueba la plataforma 100% gratis</p>
                <p>Válido por 7 días</p>
              </div>
              <div className="card__info--button">
                <a href="#">
                  <button>Empezar</button>
                </a>
              </div>
            </div>
            <div className="card__advantages">
              <ul className="card__advantages--list">
                <div>
                  <img src={checkSVG} alt="Check Icon" />
                  <p>Módulos de Crisis Emocional</p>
                </div>
                <div>
                  <img src={checkSVG} alt="Check Icon" />
                  <p>Módulos de Ansiedad</p>
                </div>
                <div>
                  <img src={checkSVG} alt="Check Icon" />
                  <p>Módulos de Salud Mental Basica</p>
                </div>
              </ul>
            </div>
          </div>
          <div className="main__memberships--container-cards">
            <div className="card__info">
              <div className="card__info--title">
                <h3>Plan mensual</h3>
              </div>
              <div className="card__info--price">
                <p>US$</p>
                <span>12</span>
              </div>
              <div className="card__info--period">
                <p>Cada mes</p>
                <p>Válido por 3 meses</p>
              </div>
              <div className="card__info--button">
                <a href="#">
                  <button>Empezar</button>
                </a>
              </div>
            </div>
            <div className="card__advantages">
              <ul className="card__advantages--list">
                <div>
                  <img src={checkSVG} alt="Check Icon" />
                  <p>Programa Salud mental</p>
                </div>
                <div>
                  <img src={checkSVG} alt="Check Icon" />
                  <p>Talleres Mensuales</p>
                </div>
                <div>
                  <img src={checkSVG} alt="Check Icon" />
                  <p>Círculos de empatía privados</p>
                </div>
              </ul>
            </div>
          </div>
          <div className="main__memberships--container-cards">
            <div className="card__info">
              <div className="card__info--suggest">
                <p>Mejor precio/calidad</p>
              </div>
              <div className="card__info--title">
                <h3>Plan anual</h3>
              </div>
              <div className="card__info--price">
                <p>US$</p>
                <span>110</span>
              </div>
              <div className="card__info--period">
                <p>Todos los beneficios de la plataforma</p>
                <p>Válido por un año</p>
              </div>
              <div className="card__info--button">
                <a href="#">
                  <button>Empezar</button>
                </a>
              </div>
            </div>
            <div className="card__advantages">
              <ul className="card__advantages--list">
                <div>
                  <img src={checkSVG} alt="Check Icon" />
                  <p>1 año de herramientas terapéuticas</p>
                </div>
                <div>
                  <img src={checkSVG} alt="Check Icon" />
                  <p>100% de los programas abiertos</p>
                </div>
                <div>
                  <img src={checkSVG} alt="Check Icon" />
                  <p>Salud mental Basica / intermedia / avanzada</p>
                </div>
                <div>
                  <img src={checkSVG} alt="Check Icon" />
                  <p>Comunidad privada de apoyo</p>
                </div>
              </ul>
            </div>
          </div>
        </section>
      </section>
    </>
  )
}