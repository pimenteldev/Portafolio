import React from "react";
import Footer from "../../components/Footer";
import "./index.css";

function index() {
  return (<>
    <div className="timeline_content">
      <section className="timeline">
        <div className="title-wrapper">
          <h3 className="title_time">Estudios</h3>
        </div>

        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              Técnico Superior Universitario en Informática
            </h4>

            <span>2009 - 2011</span>

            <p className="timeline-text">
              Instituto Universitario de Tecnología “Antonio José de Sucre”
            </p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Bachiller en Ciencias</h4>

            <span>2003 - 2008</span>

            <p className="timeline-text">
              Liceo Bolivariano “Dr. Miguel Otero Silva”
            </p>
          </li>
        </ol>
      </section>

      <section className="timeline">
        <div className="title-wrapper">
          <h3 className="title_time">Experiencia</h3>
        </div>

        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">El Caney</h4>

            <span>2022 — Presente</span>

            <p className="timeline-text">
              Sistema de gestión y control del restaurante, el aplicativo se
              encarga de llevar un control de inventario, facturacion, servicios
              y reportes para el cliente.
            </p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Búscame En Guate</h4>

            <span>2021 — 2022</span>

            <p className="timeline-text">
              Sitio Web - Aplicación Android de prestamos de dinero por cuotas,
              Conectadas mediante una Api que permite la comunicación entre el
              sitio y los dispositivos.
            </p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Merpre</h4>

            <span>2019 — 2020</span>

            <p className="timeline-text">
              Sistema Web de Gestión y control de Préstamos, Desarrollo de
              Aplicativo Android vinculado con cuentas de usuario para los
              trabajadores de la empresa que se comunica con el servidor vía
              webservices.(Rutinas de cobro, Registro de Clientes, Préstamos,
              Cierre de cajas, Geolocalización)
            </p>
          </li>
        </ol>
      </section>
      
    </div>
    <Footer />
    </>
  );
}

export default index;
