import React from 'react'
import '../AboutMe/AboutMe.css'

const AboutMe = () => {
  return (
    <div className='AboutToMe'>
      <h6 className='descriptionMe'>

          <span className='subtitles'>who I am?</span>
            My name is Christian Martínez originally from Mexico I am a front end web developer. Using technologies such as HTML, CSS, JavaScript, React.js, redux, TypeScript, API implementation, HOOKS and testing. I am currently in a learning stage, which accompanied by education, discipline and perseverance have made me a self-taught person passionate about web development, taking care of the details of my code, learning new technologies and hungry to learn more

            <span className='subtitles'>studies</span>
            I studied high school in Tepatitla de Morelos my current city in the Regional High School of Jalisco (Graduated). In August 2021 I started my web development courses at UDEMY, starting with HTML, CSS, Responsive web pages, Java script and sass, later I discovered the React.js library and I liked it a lot

            <span className='subtitles'>Focus</span>
            I fully trust that with discipline, dedication and a firm and passionate will, goals that seem very distant at the beginning can be achieved, it is incredible what in a year of studies I have managed to create and learn and I am dying of emotion to know what you will learn through the years
     </h6>
     <img className='imgMe' src="/profil.jpg" alt="" />
    </div>
  )
}

export default AboutMe
