import React from 'react';
import { Route, Routes } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/theme";
import PageNotFound from "../../pages/PageNotFound";
import Navbar from "../../components/Navbar";
import SobreMi from "../../pages/SobreMi";
import Resumen from "../../pages/Resumen";
import Portafolio from "../../pages/Portafolio";
import Blog from "../../pages/Blog";
import Contacto from "../../pages/Contacto";
import Post from "../../pages/Post";
import TopButton from "../../components/TopButton";
import {Toaster} from "react-hot-toast";

export default function BaseLayout() {
   const [{ themeName, toggleTheme }] = useContext(ThemeContext);

   return (
      <main className={themeName}>
        <Navbar toggleTheme={toggleTheme} themeName={themeName} />
        <div className="wrapper">
          <Routes>
            <Route path="/" element={<SobreMi />} />
            <Route exact path="/resumen" element={<Resumen />} />
            <Route exact path="/portafolio" element={<Portafolio />} />
            <Route exact path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<Post />} />
            <Route exact path="/contacto" element={<Contacto />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
        <TopButton theme={themeName} />
        <Toaster 
          position="top-center"
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
              duration:5000,
              theme:{
                primary:'green',
                secondary:'black',

              },
            }
          }}/>
      </main>
   )
}

