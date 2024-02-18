import endingSVG from '../../svg/EndingIcon.svg'
import iconBienestarTu from '../../svg/IconBienestarTu.svg'

export default function EndingMainLanding(){
  return(
    <>
      <section className="main__ending">
        <div className="main__ending--quote">
          <h2>"Create un futuro mientras tus estudias e inviertes en tus metas"</h2>
          <a href="#">
            <button>Empezar</button>
          </a>
        </div>
        <div className="main__ending--image">
          <img src={endingSVG} alt="Ending SVG" />
        </div>
        <div className='main__ending--span'>
          <div className="main__ending--span-link">
            <div className="ending__icon--img">
              <img src={iconBienestarTu} alt="Icon Website" />  
            </div>
            <div className="ending__icon--slogan">
              {/* Cambiar span y p por a */}
              <span>BienestarTu</span>
              <p>Salud Mental</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}