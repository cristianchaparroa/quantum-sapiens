/* Images */
import img1 from '../../img/LandingPage/CourseImg1.jpg'
import img2 from '../../img/LandingPage/CourseImg2.jpg'
import img3 from '../../img/LandingPage/CourseImg3.jpg'
import img4 from '../../img/LandingPage/CourseImg4.jpg'
import img9 from '../../img/LandingPage/CourseImg9.jpg'
import svgArrow from '../../svg/IconArrow.svg'

export default function CoursesWebsite () {
  const membership = [
    {
      img: img9,
      title: 'Tu guía completa para la programación web3',
      description: 'Aprende a programar en la blockchain de Solana.'
    },{
      img: img1,
      title: 'Programación en Solana para web3',
      description: 'Este curso te llevará desde los fundamentos de Solana.'
    },{
      img: img2,
      title: 'Desarrollo de aplicaciones descentralizadas',
      description: 'Descubre cómo puedes utilizar Solana para desarrollar tus propias DApps.'
    },{
      img: img3,
      title: 'El camino hacia la programación web3 con Solana',
      description: 'Emprende tu viaje en el mundo de la programación web3 con Solana.'
    },{
      img: img4,
      title: 'Programación web3 paso a paso',
      description: 'Sumérgete en el mundo de la programación web3 con Solana.'
    }
  ]

  return(
    <>
      <section className="main__courses">
        <h2>Nuestros Cursos</h2>
        <section className="main__courses--cards">
          {membership.map((member, index) => (
            <div 
            key={index} 
            className='card__course'>
              <img 
              className='card__course--img'
              src={member.img} 
              alt="Imagen del Curso"
              onClick={() => console.log(member)}/>
              <div className='card__course--info'>
                <h3 className='card__course--info-title'>{member.title}</h3>
                <p className='card__course--info-description'>{member.description}</p>
              </div>
            </div>
          ))}
          <div className='card__course--moreInfo'>
            <a href='#' className="card__course--moreInfo-items">
              <img src={svgArrow} alt="Icono de flecha" />
              <p>Ver mas</p>
            </a>
          </div>
        </section>
      </section>
    </>
  )
}