import React,{useState} from "react";
import "./index.css";
import { Link, Outlet } from "react-router-dom";

function index() {
  const [stateMenu, setStateMenu] = useState(false)

  const handleMenu = () => {
    stateMenu ? setStateMenu(false) : setStateMenu(true)
  }

  const handleLink = () => {
    setStateMenu(false)
  }

  return (
    <>
      <nav>
        <div className="navbar">
          <div className="navbar-logo">
            <figure>
              <img
                src="./logo.png"
                alt="Héctor Pimentel Logo"
                width="30px"
                height="30px"
              />
            </figure>
            <h2 className="navbar-logo-title"><small>PimentelDev</small></h2>
          </div>
          <button className="navbar-bars" onClick={handleMenu}>
            <figure>
              <img
                src="./icons/bars.svg"
                alt="Menu"
                width="30px"
                height="30px"
              />
            </figure>
          </button>
        </div>
        <div className={stateMenu ? "navbar-active": "navbar-content"}>
          <div className="navbar-list">
            <Link to="/" className="navbar-item" onClick={handleLink}>
                Sobre Mi
            </Link>
            <Link to="/resumen" className="navbar-item" onClick={handleLink}>
                Resumen
            </Link>
            <Link to="/portafolio" className="navbar-item" onClick={handleLink}>
                Portafolio
            </Link>
            <Link to="/blog" className="navbar-item" onClick={handleLink}>
                Blog
            </Link>
            <Link to="/contacto" className="navbar-item" onClick={handleLink}>
                Contacto
            </Link>
            
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default index;
