/* Images */
import img1 from '../../img/CourseImg1.png'
import img2 from '../../img/CourseImg2.png'
import img3 from '../../img/CourseImg3.png'
import img4 from '../../img/CourseImg4.png'
import img5 from '../../img/CourseImg5.png'
import img6 from '../../img/CourseImg6.png'
import img7 from '../../img/CourseImg7.png'
import img8 from '../../img/CourseImg8.png'
import img9 from '../../img/CourseImg9.png'
import svgArrow from '../../svg/IconArrow.svg'

export default function CoursesWebsite () {
  const membership = [
    {
      img: img9,
      title: 'Habla con Eva',
      description: 'Esta inteligencia artificial quiere darte nuevas perspectivas sobre soluciones que te estén pasando emocionalmente.'
    },
    {
      img: img1,
      title: 'Como superar el duelo',
      description: 'Aprende a gestionar el duelo.'
    },
    {
      img: img2,
      title: 'Como obtener paz y salud mental',
      description: 'Explora el camino hacia la serenidad interior y la salud mental. Descubre cómo alcanzar la paz en medio del caos diario.'
    },
    {
      img: img3,
      title: 'Comunidad de BienestarTu',
      description: 'Bienvenido a la comunidad de BienestarTu.'
    },
    {
      img: img4,
      title: 'Una buena relación familiar',
      description: 'Aprende los mejores consejos para llevar una relación familiar sana.'
    },
    {
      img: img5,
      title: 'Mi relación con el dinero',
      description: 'Explorando los senderos de mi prosperidad: una introspección breve sobre mi relación con el dinero.'
    },
    {
      img: img6,
      title: 'Creando una buena relación en pareja',
      description: 'Forjando la armonía a dos: Descubre el arte de construir una conexión sólida y amorosa en pareja.'
    },
    {
      img: img7,
      title: '¿Cómo salir de una tusa?',
      description: 'Despertando del desamor: Estrategias poderosas para superar una tusa y recuperar tu brillo interior.'
    },
    {
      img: img8,
      title: 'Como ganarle a la ansiedad',
      description: 'Domina el arte de la calma: estrategias efectivas y poderosas para vencer a la ansiedad y recuperar el control de tu vida.'
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
              alt="Imagen del Curso" />
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