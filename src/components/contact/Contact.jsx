import React from 'react'
import './contact.css'
import CV from '../../assets/cv.pdf'

import {MdEmail} from 'react-icons/md' 
import {FaWhatsapp} from 'react-icons/fa'
import {BsFiletypePdf} from 'react-icons/bs'

import emailjs from 'emailjs-com'
import {useRef} from 'react'



const Contact = () => {

const form = useRef();

const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_nq1ba08', 'template_1q195bt', form.current, 'HTrRv76nVw_Arcd8B')

  e.target.reset()

   
};




  return (
    <section id="contact">

    <h5>Contato</h5>
    <h2>Entre em contato comigo</h2>

    <div className="container contact__container">

      <div className="contact__options">

        <article className="contact__option">

          <MdEmail className="contact__option-icon"/>
          <h4>Email</h4>
          <h5>matheusmatoscoelho@hotmail.com</h5>
          <a href="mailto:matheusmatoscoelho@hotmail.com" target="_blank">Enviar email</a>

        </article>

        <article className="contact__option">

          <FaWhatsapp className="contact__option-icon"/>
          <h4>Whatsapp</h4>
          <h5>(13)99620-9091</h5>
          <a href="https://web.whatsapp.com/send?phone+5513996209091" target="_blank">Enviar mensagem</a>

        </article>

        <article className="contact__option">

          <BsFiletypePdf className="contact__option-icon"/>
          <h4>Currículo</h4>
          <h5>Meu currículo</h5>
          <a href={CV} download className='btn'>Baixar Currículo</a>

        </article>

      </div>

      <form ref={form} onSubmit={sendEmail}>

        <input type="text" name='name' placeholder='Nome/Empresa' required/>
        <input type="email" name='email' placeholder='Email' required/>
        <textarea name='name' rows='7' placeholder='Mensagem' required> </textarea>
        <button type='submit' className='btn btn-primary'>Enviar mensagem</button>



      </form>



    </div>

    </section>
  )
}

export default Contact