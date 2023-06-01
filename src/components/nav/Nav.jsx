import React from 'react'
import './nav.css'

import {BiHome} from 'react-icons/bi'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBrain} from 'react-icons/bi'
import {FaRegFileCode} from 'react-icons/fa'
import {FiPhoneCall} from 'react-icons/fi'

import {useState} from 'react'

const Nav = () => {

  const [activeNav, setActiveNav] = useState('#')

  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><BiHome/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBrain/></a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><FaRegFileCode/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><FiPhoneCall/></a>
    </nav>
  )
}

export default Nav