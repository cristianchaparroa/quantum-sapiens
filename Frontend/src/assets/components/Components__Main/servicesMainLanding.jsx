/* Imports */
// Images
import ServicesImg1 from '../../img/ServicesImg1.png'
import ServicesImg2 from '../../img/ServicesImg2.png'
import ServicesImg3 from '../../img/ServicesImg3.png'
import ServicesImg4 from '../../img/ServicesImg4.png'

export default function ServicesMainLanding () {
  const services = [
    {
      img: ServicesImg3,
      title: 'La comunidad mas amorosa',
      text: 'Comunidad privada de personas que van en el mismo camino que tu, acompañado con profesionales de la salud mental que te ayudaran a mejorar tu calidad emocional.'
    }, {
      img: ServicesImg1,
      title: 'La mejor metodologia online',
      text: 'Simple y efectiva donde aprenderas a como dejar de sentirme mal emocionalmente y a como controlar la ansiedad.'
    }, {
      img: ServicesImg2,
      title: 'Chat terapeutico ilimitado',
      text: 'Chat ilimitado para tus consultas, crisis o conversacion que quieras tener.'
    }, {
      img: ServicesImg4,
      title: 'Talleres todos los meses',
      text: 'Párrafo. Haz clic aquí para agregar tu propio texto y editar. Aquí puedes contar tu historia y permitir que tus usuarios sepan más sobre ti.'
    }
  ]

  return (
    <>
      <section className="main__services">
        <div className="main__services--info">
          <h2>Lo que ofrecemos</h2>
          <p>Con tu suscribcion premium te damos estos beneficios</p>
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