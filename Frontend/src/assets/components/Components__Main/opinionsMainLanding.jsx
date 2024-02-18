/* SVGs */
import opinionSVG1 from '../../svg/OpinionUser1.svg'
import opinionSVG2 from '../../svg/OpinionUser2.svg'
import opinionSVG3 from '../../svg/OpinionUser3.svg'

export default function OpinionMainLanding(){
  return(
    <>
      <section className="main__opinion">
        <div className="main__opinion--title">
          <h2>Qué dicen nuestros clientes</h2>
        </div>
        <div className="main__opinion--opinions">
          <div className="card__opinion1">
            <img src={opinionSVG1} alt="Opinion User" />
          </div>
          <div className="card__opinion2">
            <img src={opinionSVG2} alt="Opinion User" />
          </div>
          <div className="card__opinion3">
            <img src={opinionSVG3} alt="Opinion User" />
          </div>
        </div>
      </section>
    </>
  )
}