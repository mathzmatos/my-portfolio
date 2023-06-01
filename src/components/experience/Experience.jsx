import React from 'react'
import './experience.css'

import {FaReact} from 'react-icons/fa'
import {AiOutlineHtml5} from 'react-icons/ai'
import {DiCss3} from 'react-icons/di'
import {IoLogoJavascript} from 'react-icons/io'
import {FaPython, FaJava} from 'react-icons/fa'
import {TbBrandCSharp} from 'react-icons/tb'
import {DiNodejsSmall} from 'react-icons/di'


const Experience = () => {
  return (
    <section id="experience">

    <h5>Skills</h5>
    <h2>Conhecimentos</h2>

    <div className="container experience__container">
        
        <div className="experience__content">

          <article className="experience__details">
            <FaReact className="experience__details-icon"/>
            <div>
            <h4>React.js</h4>
            <small className="text-light">Junior</small>
            </div>
            
          </article>

          <article className="experience__details">
            <AiOutlineHtml5 className="experience__details-icon"/>
            <div>
            <h4>HTML</h4>
            <small className="text-light">Junior</small>
            </div>
          </article>

          <article className="experience__details">
            <DiCss3 className="experience__details-icon"/>
            <div>
            <h4>CSS</h4>
            <small className="text-light">Junior</small>
            </div>
          </article>

          <article className="experience__details">
            <IoLogoJavascript className="experience__details-icon"/>
            <div>
            <h4>JavaScript</h4>
            <small className="text-light">Junior</small>
            </div>
          </article>

          <article className="experience__details">
            <FaPython className="experience__details-icon"/>
            <div>
            <h4>Python</h4>
            <small className="text-light">Junior</small>
            </div>
          </article>

          <article className="experience__details">
            <TbBrandCSharp className="experience__details-icon"/>
            <div>
            <h4>C#</h4>
            <small className="text-light">Junior</small>
            </div>
          </article>

          <article className="experience__details">
            <DiNodejsSmall className="experience__details-icon"/>
            <div>
            <h4>Node.js</h4>
            <small className="text-light">Junior</small>
            </div>
          </article>

          <article className="experience__details">
            <FaJava className="experience__details-icon"/>
            <div>
            <h4>Java</h4>
            <small className="text-light">Junior</small>
            </div>
          </article>



        </div>

      

    </div>



    </section>
  )
}

export default Experience