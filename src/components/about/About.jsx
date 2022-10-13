import React from 'react'
import "./about.css"
import ME from '../../assets/me.jpg'
import {FaPython} from 'react-icons/fa'
import {SiCplusplus} from 'react-icons/si'
import {SiJavascript} from 'react-icons/si'

const About = () => {
  return (
    <section id='about'>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <img src={ME} alt="me" className='about__me-image'/>
        </div>
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaPython size={70} className='about__icon'></FaPython>
              <h5>2 Years Experience</h5>
            </article>
            <article className='about__card'>
              <SiCplusplus size={70} className='about__icon'></SiCplusplus >
              <h5>2 Years Experience</h5>
            </article>
            <article className='about__card'>
              <SiJavascript size={70} className='about__icon'></SiJavascript>
              <h5>1 Year Experience</h5>
            </article>
          </div>
          <p>
              As a native New Yorker, diversity and discovery has always been a passion of mine.
              “Always walk through life as if you have something new to learn and you will.” I love to travel and learn about the latest technological and scientific marvels of the world.
              I’m looking to transition from a career in Medicine to Computer Science.
              I am driven by my passion to learn, my skills include:
              Problems solving, the ability to grasp new concepts quickly, and flexibility.
              Some of the languages and frameworks I am adept at are:
              Python, C++, Solidity, Javascript, HTML, CSS, Flask, React, Tensorflow, Keras
            </p>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
