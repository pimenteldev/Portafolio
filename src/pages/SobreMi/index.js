import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./index.css";

function index() {
  return (
    <>
      <Header />

      <section className="sobre_mi_text">
          <img
            src="./avatar.jpg"
            alt="avatar"
            width="180px"
            height="180px"
            className="sobre_mi_img"
          />
          <p>
            Me dedico al desarrollo de paginas web, sistemas automatizados y
            aplicativos android en lo cual dispongo de más de 2 años de
            experiencia realizando proyectos institucionales, empresariales y
            personales.
          </p>
      </section>

      <section className="sobre_mi_contact_info">
        
          <ul className="contacts-list">
            <li className="contact-item">
              <div className="contact-info">
                <p className="contact-title">Email</p>
                <a
                  href="mailto:pimenteldeveloper@gmail.com"
                  className="contact_a"
                >
                  pimenteldeveloper@gmail.com
                </a>
              </div>
            </li>
            <li className="contact-item">
              <div className="contact-info">
                <p className="contact-title">Teléfono</p>
                <a href="tel:+584123653280" className="contact_a">
                  +58 (412) 365-3280
                </a>
              </div>
            </li>
            <li className="contact-item">
              <div className="contact-info">
                <p className="contact-title">Nacimiento</p>
                <span className="contact_a">Octubre 16, 1991</span>
              </div>
            </li>
            <li className="contact-item">
              <div className="contact-info">
                <p className="contact-title">Localización</p>
                <address className="contact_a">
                  Tabay, Mérida, Venezuela
                </address>
              </div>
            </li>
          </ul>
      </section>

      <section className="sobre_mi_text">

          <p>
            Al trabajar como Freelance tengo experiencia al momento de
            identificar requerimientos basicos para emprender un nuevo proyecto,
            permitiendome entender la logica de los procesos actuales que maneja
            el cliente y así poder brindar soluciones tanto para automatizar los
            procesos existentes como para crear nuevos que beneficien al cliente
            y le permitan realizar sus labores de forma eficiente y efectiva.
          </p>
          <img
            src="./pc.png"
            alt="code_img"
            width="250px"
            className="sobre_mi_img"
          />
      </section>

      <section className="sobre_mi_service">
        <h3 className="sobre_mi_service_title">Mis Conocimientos</h3>

        <ul className="service-list">
          <li className="service-item">
            <div className="service-icon-box">
              <img src="./icon-design.svg" alt="design icon" width="80px" />
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">Frontend Web</h4>

              <p className="service-item-text">
                Conocimientos en HTML, CSS, JavaScript y Frameworks de
                desarrollo para crear la interfaz del usuario en un sitio web.
              </p>
            </div>
          </li>

          <li className="service-item">
            <div className="service-icon-box">
              <img
                src="./icon-dev.svg"
                alt="Web development icon"
                width="80px"
              />
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">Backend Web</h4>

              <p className="service-item-text">
                Conocimientos de frameworks del lado del servidor, Manejo
                integral de Bases de datos relacionales y no relacionales,
                Manejo de servidores, Desarrollo de API.
              </p>
            </div>
          </li>

          <li className="service-item">
            <div className="service-icon-box">
              <img src="./icon-app.svg" alt="mobile app icon" width="80px" />
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">Aplicaciones Moviles</h4>

              <p className="service-item-text">
                Desarrollo de aplicaciones Android que se conectan por medio de
                una API a los sistemas web permitiendo gestionarlos de forma
                remota.
              </p>
            </div>
          </li>

          <li className="service-item">
            <div className="service-icon-box analist">
              <img src="./icon-analist.svg" alt="camera icon" width="90px" />
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title analista">Analista</h4>

              <p className="service-item-text">
                Saber escuchar y tener la capacidad de hacer las preguntas
                correctas.
              </p>
            </div>
          </li>
        </ul>
      </section>

      <section className="sobre_mi_skill">
        <h3 className="h3 skills-title">Conocimientos</h3>

        <ul className="skills-list">
          <li className="skills-item item-html">
            <div className="title-wrapper"></div>
          </li>
          <li className="skills-item item-css">
            <div className="title-wrapper"></div>
          </li>
          <li className="skills-item item-php">
            <div className="title-wrapper"></div>
          </li>
          <li className="skills-item item-js">
            <div className="title-wrapper"></div>
          </li>
          <li className="skills-item item-java">
            <div className="title-wrapper"></div>
          </li>
          <li className="skills-item item-python">
            <div className="title-wrapper"></div>
          </li>
        </ul>
      </section>

      <section className="sobre_mi_phrase">
 
          <img
            src="./gates.jpg"
            alt="Bill Gates"
            width="150px"
            height="150px"
            className="sobre_mi_img"
          />
          <i>
            Sé amable con los ners.<br /> Lo más probable es 
            que termines trabajando para uno. <br /> <strong>Bill Gates</strong>.
          </i>
      </section>

      <section className="sobre_mi_tools">
        <h3 className="h3 tools-title">Herramientas</h3>

        <ul className="tools-list">
          <li className="tools-item item-github">
            <div className="title-wrapper"></div>
          </li>
          <li className="tools-item item-react">
            <div className="title-wrapper"></div>
          </li>
          <li className="tools-item item-node">
            <div className="title-wrapper"></div>
          </li>
          <li className="tools-item item-npm">
            <div className="title-wrapper"></div>
          </li>
          <li className="tools-item item-bootstrap">
            <div className="title-wrapper"></div>
          </li>
          <li className="tools-item item-android">
            <div className="title-wrapper"></div>
          </li>
        </ul>
      </section>

      <Footer />
    </>
  );
}

export default index;
