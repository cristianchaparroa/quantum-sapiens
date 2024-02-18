import img1 from '../img/LandingPage/imgComputer1.jpg';
import img2 from '../img/LandingPage/imgComputer2.jpg';
import img3 from '../img/LandingPage/imgComputer3.jpg';
import img4 from '../img/LandingPage/imgExplorer.jpg';
import img5 from '../img/LandingPage/imgRunning2.jpg';
import img6 from '../img/LandingPage/imgBook3.jpg';

import "../styles/siteCourses/mainCourses.css"

const coursesInfo = [
  {
    key: 1,
    img: img1,
    intereses: 0.8,
    duration: '8 horas',
    difficulty: 'Básico',
    title: 'Dominando Solana: Tu guía completa para la programación web3',
    description: 'Aprende a programar en la blockchain de Solana y descubre cómo puedes desarrollar aplicaciones descentralizadas (dApps) con este curso completo.'
  },{
    key: 2,
    img: img2,
    intereses: 0.3,
    difficulty: 'Medio',
    duration: '16 - 20 horas',
    title: 'Programación en Solana para web3: De principiante a experto',
    description: 'Este curso te llevará desde los fundamentos de Solana hasta las técnicas avanzadas de programación en web3, preparándote para convertirte en un desarrollador de blockchain competente.'
  },{
    key: 3,
    img: img3,
    intereses: 0.1,
    duration: '8 horas',
    difficulty: 'Medio',
    title: 'Solana y web3: Desarrollo de aplicaciones descentralizadas',
    description: 'Descubre cómo puedes utilizar Solana para desarrollar tus propias aplicaciones descentralizadas en el ecosistema web3 con este curso práctico.'
  },{
    key: 4,
    img: img4,
    intereses: 0.5,
    difficulty: 'Avanzado',
    duration: '20 - 40 horas',
    title: 'El camino hacia la programación web3 con Solana',
    description: 'Emprende tu viaje en el mundo de la programación web3 con Solana y aprende a construir soluciones descentralizadas innovadoras.'
  },{
    key: 5,
    img: img5,
    intereses: 0.1,
    duration: '8 horas',
    difficulty: 'Básico',
    title: 'Inmersión en Solana: Programación web3 paso a paso',
    description: 'Sumérgete en el mundo de la programación web3 con Solana y aprende a construir aplicaciones descentralizadas desde cero con este curso paso a paso.'
  },{
    key: 6,
    img: img6,
    intereses: 0.5,
    difficulty: 'Básico',
    duration: '20 - 40 horas',
    title: 'Estudia, Expande tu Mente y Aumenta tu Capital: La Nueva Era de la Educación',
    description: 'Aprende cómo puedes transformar tu educación en una herramienta poderosa para el crecimiento personal y financiero.'
  }
]

export default function SiteCourses ({ changePage }) {
  return(
    <main className="main">
      <section className="main__containerCourses">
        <div className="main__courses--title">
          <h1>Nuestros cursos son:</h1>
        </div>
        <section className="main__courses--cards-column">
          {
            coursesInfo.map((card) => {
              return(
                <div className="main__courses--card" key={card.key}>
                  <div className="main__courses--card-img">
                    <img src={card.img} alt="" />
                  </div>
                  <div className="main__courses--card-info">
                    <h2>{card.title}</h2>
                    <p>{card.description}</p>
                    <p>{card.duration}</p>
                    <a href="#" onClick={() => changePage(1)}>
                      <button>Ver mas</button>
                    </a>
                  </div>
                </div>
              )
            })
          }
        </section>
      </section>
    </main>
  )
}