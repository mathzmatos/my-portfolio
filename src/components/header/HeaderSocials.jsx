import React from 'react'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/matheus-matos-a96251221/" target="_blank" className=""><AiFillLinkedin/></a>
        <a href="https://github.com/mathzmatos" target="_blank" className=""><AiFillGithub/></a>
        
    </div>
  )
}

export default HeaderSocials