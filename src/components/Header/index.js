import React from "react";
import "./index.css";
function index() {
  return (
    <header>
      <div className="text_header">
        <h1 className="text_header_name" title="">
          Hola, Soy Héctor Pimentel
        </h1>
        <p className="text_header_title">Desarrollador Full Stack</p>
        <ul className="header_social">
          <li>
            <a
              href="https://www.facebook.com/pimentelhector16"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/redes/facebook.svg"
                width={34}
                height={34}
                alt="facebook-icon"
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/pimentelhector16"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/redes/instagram.svg"
                width={34}
                height={34}
                alt="instagram-icon"
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/hector-pimentel-09681b201"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/redes/linkedin.svg"
                width={34}
                height={34}
                alt="linkedin-icon"
              />
            </a>
          </li>
          <li>
            <a href="https://github.com/pimenteldev" target="_blank" rel="noreferrer">
              <img
                src="/redes/github.svg"
                width={34}
                height={34}
                alt="github-icon"
              />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default index;
