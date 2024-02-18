export default function Footer(){
  return(
    <>
      <footer className="footer">
        <section className="footer__container">
          <div className="footer__container--contact">
            <h3>Contacto</h3>
            <div className="footer__container--contact-number">
              <span>Contacto general:</span>
              <p>+57 315-75000-05</p>
            </div>
            <div className="footer__container--contact-client">
              <span>Atención al cliente</span>
              <p>Hola@bienestartu.com</p>
            </div>
          </div>
          <div className="footer__container--info">
              <h3>Enlaces rápidos</h3>
              <div className="footer__container--info-links">
                <a href="#">Términos y condiciones</a><br />
                <a href="#">Política de privacidad</a>
              </div>
          </div>
          <div className="footer__container--email">
              <h3>Seguir</h3>
              <div className="footer__container--email-input">
                <span>Suscribete para recibir todas la novedades.</span>
                <input 
                type="text" 
                placeholder="Ingresa tu correo"
                className="buttonEmail" />
                <input 
                type="submit" 
                value="Suscribete"
                className="buttonSendEmail" />
              </div>
          </div>
          <div className="footer__container--social">
            <h3>Siguenos</h3>
            <div className="footer__container--social-link">
              <a href="#">LinkedIn</a>
              <a href="#">YouTube</a>
              <a href="#">Facebook</a>
            </div>
          </div>
        </section>
        <section className="footer__copyright">
          <p> de Latam para el 🌍 BienestarTU © 2035 </p>
        </section>
      </footer>
    </>
  )
}