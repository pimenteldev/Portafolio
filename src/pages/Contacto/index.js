import React, {useState} from "react";
import "./index.css";
import { useForm } from 'react-hook-form'
import Footer from "../../components/Footer";
import {toast} from "react-hot-toast";
import {useNavigate} from "react-router-dom"
import emailjs from 'emailjs-com'

function index() {

  const [stateProgrammer, setStateProgrammer] = useState(false)
  const handleProgrammer = () => {
    stateProgrammer ? setStateProgrammer(false) : setStateProgrammer(true)
  }
  const navigate = useNavigate()
  const {register, handleSubmit, formState: {errors} } = useForm()
  
  const onSubmit = (data) => {
      emailjs.send('service_portafolio',"template_pizgnc6",{
        "from_name": data.username,
        "to_name": "Héctor",
        "message": data.messageUser,
        "reply_to": data.email
        },"GajTZzzQEQowXYmm-").then((response) =>{
        console.log('Success!', response.status, response.text)
        toast.success("Mensaje Enviado.")
      }, (e) => {
        toast.error("Error, Mensaje no Enviado.")  
        console.log(e)
      })
    navigate("/")
  }
  const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/
  const pattern = new RegExp('^[a-zA-ZñÑáéíóúÁÉÍÓÚ ,.]+$')
  const patternMessage = new RegExp('^[0-9a-zA-ZñÑáéíóúÁÉÍÓÚ ,.]+$')

  return (
    <>
      <section className="contact-form">
        <h3 className="h3 form-title">Contacto</h3>
        <div className="content-form-contacto">
          <div className="form-contacto-left">
            <ul className="contacto-list">
              <li className="contacto-item">
                <div className="contactoinfo">
                  <p className="contactotitle">Curriculum Vitae</p>
                  <a
                    href="mailto:pimenteldeveloper@gmail.com"
                    className="contactolink"
                  >
                    Descargar PDF 
                  </a>
                   <span> - </span> <a
                    href="mailto:pimenteldeveloper@gmail.com"
                    className="contactolink"
                  >
                    Descargar WORD
                  </a>
                </div>
              </li>
              <li className="contacto-item">
                <div className="contactoinfo">
                  <p className="contactotitle">Email</p>
                  <a
                    href="mailto:pimenteldeveloper@gmail.com"
                    className="contactolink"
                  >
                    pimenteldeveloper@gmail.com
                  </a>
                </div>
              </li>
              <li className="contactoitem">
                <div className="contactoinfo">
                  <p className="contactotitle">
                    
                    Teléfono
                  </p>
                  <a href="tel:+584123653280" className="contactolink">
                    +58 (412) 365-3280
                  </a>
                </div>
              </li>
              <li className="contactoitem">
                <div className="contactoinfo">
                  <p className="contactotitle">Localización</p>
                  <address>Tabay, Mérida, Venezuela</address>
                </div>
              </li>
            </ul> 
            <button onClick={handleProgrammer} id="btn_programmer" className="btn_img_programmer">
            Estatus del Desarrollador</button>
            {
              stateProgrammer && <div className="content_img_pro"><div className="img_programmer"></div></div>
            }
          </div>
          <form className="form-contacto-right" id="formcontact" onSubmit={handleSubmit(onSubmit)} >
            <div className="input-wrapper">

              <label htmlFor="username">Nombre</label> 
              <input
                  {...register("username", {
                    required: {
                      value: true,
                      message: "Este campo es obligatorio",
                    },
                    pattern: {
                      value: pattern,
                      message: "El campo no debe contener caracteres especiales o números",
                    },
                    minLength:{
                      value:2,
                      message: "Debe contener más de 2 Caracteres",
                    },
                    maxLength:{
                      value:50,
                      message: "No debe contener más de 50 Caracteres",
                    },
                  })}
                  placeholder="Nombre"
                  className="form-input"
                />
                <> <span className="err_msg">{errors.username && errors.username.message}</span></>
               
                

              
              <label htmlFor="email">Email</label> 
              <input
                type="email"
                {...register("email", {
                  required: {
                      value: true,
                      message: "Este campo es obligatorio",
                    },
                  pattern: {
                    value: emailRegExp,
                    message: "Dirección de Correo Invalida"
                  }
                })}
                placeholder="Email"
                className="form-input"
              />
              <span className="err_msg">{errors.email && errors.email.message}</span>
              

              
              <label htmlFor="mensaje">Mensaje</label> 
              <textarea
                {...register("messageUser", {
                 required: {
                      value: true,
                      message: "Este campo es obligatorio",
                    },
                  pattern: {
                    value: patternMessage,
                    message: "El campo no debe contener caracteres especiales(!Saltos de Linea)",
                  },
                   minLength:{
                      value:10,
                      message: "Debe contener más de 10 Caracteres",
                    },
                })}

                placeholder="Mensaje"
                className="form-input"
              />
              <span className="err_msg">{errors.messageUser && errors.messageUser.message}</span>
              

            </div>
           

            <div>
              
              <button className="form-btn" type="submit">
                Enviar Mensaje
              </button>
            </div>
          </form>
        </div>

        <div id="msgContacto" className="msgContacto"></div>
      </section>
      <Footer />
    </>
    );
}

export default index;