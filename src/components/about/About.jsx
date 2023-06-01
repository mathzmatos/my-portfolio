import React from 'react'
import './about.css'

import {MdOutlineEmojiPeople} from 'react-icons/md'


const About = () => {
  return (
    <section id="about">
      <h5>Sobre</h5>
      <h2>Sobre Mim</h2>

      <div className="container about__container">
        <div className="about__me">
          
            <MdOutlineEmojiPeople className="about__me-image"/>
          
        </div>

        <div className="about__content">
          <p>Natural de Santos/SP, solteiro, nascido em 31/10/1998.
          Sou uma pessoa que gosta de trabalhar em grupo e colaborar com os meus colegas. Acredito que a troca de ideias e o trabalho em conjunto são fundamentais para o sucesso de qualquer projeto. Além disso, sou muito dedicado e sempre busco dar o meu melhor em tudo o que faço. No futuro, espero continuar crescendo profissionalmente e adquirindo novas habilidades e conhecimentos.
          </p>

          <a href="#contact" className="btn btn-primary">Entre em contato</a>

        </div>

      </div>
    </section>
  )
}

export default About