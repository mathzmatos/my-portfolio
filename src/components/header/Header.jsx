import React from 'react'
import './header.css'

import HeaderSocials from './HeaderSocials'
import CTA from './CTA'

import ME from '../../assets/myself.png'


const Header = () => {
  return (
    <header>
      <div className="container header__container">

        <h5>Olá,</h5>
        <h5>me chamo</h5>
        <h1>Matheus Matos</h1>
        <h5 className="text-light">Front-End Web Developer</h5>
        <CTA/>
        <HeaderSocials/>

        <div className="me">
          <img src={ME} alt="myself" />
        </div>

         {/* <a href="#contact" className='scroll__down'>Descer Página</a> */}

      </div>
    </header>
  )
}

export default Header