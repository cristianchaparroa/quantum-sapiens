/* Imports */
// Images
import ServicesImg1 from '../../img/LandingPage/imgBook2.jpg'
import ServicesImg2 from '../../img/LandingPage/imgPlanet.jpg'
import ServicesImg3 from '../../img/LandingPage/cppal_3.jpg'
import ServicesImg4 from '../../img/LandingPage/cppal_2.jpg'

export default function ServicesMainLanding () {
  const services = [
    {
      img: ServicesImg3,
      title: 'Una comunidad unida y amigable',
      text: 'Comunidad privada de personas que van en el mismo camino que tu y que te ayudara para alcanzar tus metas.'
    }, {
      img: ServicesImg1,
      title: 'La mejor metodologia online',
      text: 'Simple y efectiva donde aprenderas todo acerca del mundo blockchain.'
    }, {
      img: ServicesImg2,
      title: 'Premios y reconociminetos',
      text: 'Reconocemos tus esfuerzos, por ende te recompensamos con premios en tu proceso academico.'
    }, {
      img: ServicesImg4,
      title: 'Estudia cuando puedas',
      text: 'Tu tienes el control en tu tiempo, por eso puedes estudiar cuando estes disponible.'
    }
  ]

  return (
    <>
      <section className="main__services">
        <div className="main__services--info">
          <h2>Lo que ofrecemos</h2>
          <p>Estudiando en nuestra plataforma esta serán de las ventajas y herramientas que tendras</p>
        </div>
        <section className="main__services--cards">
          {
            services.map((service, index) => (
              <div 
              key={index}
              className="main__services--cards-card">
                <div className="main__services--cards-card_img">
                  <img src={service.img} alt="Imagen Servicio" />
                </div>
                <div className="main__services--cards-card_info">
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </div>
              </div>
            ))
          }
        </section>
      </section>
    </>
  )
}