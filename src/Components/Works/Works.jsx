import React from 'react'
import Carousel from '../Carousel/Carousel'
import '../Works/Works.css'

const Works = () => {
  
  return (  
    <div className='works'>
      <div className='description'>
        <h1 className='title-works'>| Works |</h1>
        <p className='proyect-description'>
          In this section of my page, I show some of my projects and the skills that I have been learning hard for a year. A small portfolio   where I show basic works of HTML, CSS, JavaScript EC6, React.js, Hooks, API, Redux, responsive and Bootstrap.
        </p>
        <Carousel />
      </div>
    </div>
  )
}

export default Works
