import React from 'react'
import './portfolio.css'
import P1 from '../../assets/p1.png'
import P2 from '../../assets/p2.png'
import P3 from '../../assets/p3.png'
import P4 from '../../assets/p4.png'


const data = [
  {
      id: 1,
      image: P1,
      title: 'Drum Kit',
      github: 'https://github.com/mathzmatos/Drum-Kit',
      demo: 'https://mathzmatos.github.io/Drum-Kit/'
  },

  {
      id: 2,
      image: P2,
      title: 'Grupo AngioCorpore',
      github: 'https://github.com/mathzmatos/AngioCorpore',
      demo: 'https://mathzmatos.github.io/AngioCorpore/'
  },

   {
      id: 3,
      image: P3,
      title: 'Iniciação Científica (Gasolina & Dolar) - Incompleto',
      github: 'https://github.com/mathzmatos/Iniciacao-Cientifica-2022',
      demo: 'https://colab.research.google.com/github/mathzmatos/Iniciacao-Cientifica-2022/blob/master/Inicia%C3%A7%C3%A3o_Cientifica_Gasolina_e_Dolar.ipynb'
  },

   {
      id: 4,
      image: P4,
      title: 'Black Jack (21)',
      github: 'https://github.com/mathzmatos/BlackJack-with-HTML-CSS-and-JS',
      demo: 'https://mathzmatos.github.io/BlackJack-with-HTML-CSS-and-JS/'
  },

]


const Porfolio = () => {
  
  return (
    <section id="portfolio">

    <h5>Portfolio</h5>
    <h2>Meus projetos</h2>

    <div className="container portfolio__container">

     {
      data.map(({id, image, title, github, demo}) => {

        return (
          <article key={id} className="portfolio__item">

          <div className="portfolio__item-image">
            <img src={image} alt={title}/>
          </div>
  
          <h3>{title}</h3>
        
          <div className="portfolio__item-cta">
            <a href={github} className="btn" target='_blank'>GitHub</a>
            <a href={demo} className="btn btn-primary" target='_blank'>Live Demo</a>
          </div>
          
        </article>

        )

      })
    }
     
    </div>

    </section>
  )
}

export default Porfolio