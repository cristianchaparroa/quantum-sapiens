import IconQSapiens from '../../svg/IconQSapiens.svg'

export default function EndingMainLanding(){
  return(
    <>
      <section className="main__ending">
        <div className="main__ending--quote">
          <h2>"Create un futuro mientras tus estudias e inviertes en tus metas"</h2>
        </div>
        <div className='main__ending--span'>
          <div className="main__ending--span-link">
            <div className="ending__icon--img">
              <img src={IconQSapiens} alt="Icon Website" />  
            </div>
            <div className="ending__icon--slogan">
              {/* Cambiar span y p por a */}
              <span>QuantiumSapiens</span>
              <p>Ganas mientras aprendes</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}