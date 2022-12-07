import React from "react";
import "./styles/app.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "./contexts/theme";
import PageNotFound from "./pages/PageNotFound";
import Navbar from "./components/Navbar";
import SobreMi from "./pages/SobreMi";
import Resumen from "./pages/Resumen";
import Portafolio from "./pages/Portafolio";
import Blog from "./pages/Blog";
import Contacto from "./pages/Contacto";
import TopButton from "./components/TopButton";
import {Toaster} from "react-hot-toast";

function App() {
  const [{ themeName, toggleTheme }] = useContext(ThemeContext);

  return (
    <Router>
      <main className={themeName}>
        <Navbar toggleTheme={toggleTheme} themeName={themeName} />
        <div className="wrapper">
          <Routes>
            <Route path="/" element={<SobreMi />} />
            <Route path="/resumen" element={<Resumen />} />
            <Route path="/portafolio" element={<Portafolio />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
        <TopButton theme={themeName} />
        <Toaster 
          position="bottom-center"
          reverseOrder={false}
          gutter={12}
          containerClassName=""
          containerStyle={{}}
          toastOptions={{
            className:'',
            duration:8000,
            style:{
              background:'#497174',
              fontSize:'18px',
              color: '#d6e4e5',
            },
            success:{
              duration:3000,
              theme:{
                primary:'green',
                secondary:'black',

              },
            }
          }}/>
      </main>
    </Router>
  );
}

export default App;
