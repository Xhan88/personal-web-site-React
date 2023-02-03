import React from 'react'
import '../portafolio/Portafolio.css'

const Portafolio = () => {
  return (
    <div className='container-job'>
      <div className='container-image-p'>
      <h2>E-Commerce toys</h2>
        <a href="https://grand-treacle-70f385.netlify.app" target="_blank"><img src="/proyecto1.jpg" alt="" /></a>
        

        <div className='container text'>
          
          <p>Lorem ipsum dolor sit, 
            amet consectetur adipisicing elit. 
            Commodi cumque nisi delectus quod
             id quos inventore enim dolore ad ipsam amet, 
             dolores nobis, ullam quasi ipsa porro! Enim, 
             dolorem nobis.</p>
          <a href='https://github.com/Xhan88/entrega-final-e-commerce-Martinez' target="_blank">
             <button className='btn btn-outline-light'>view code</button>
          </a>
            
        </div>

      </div>
    </div>
  )
}

export default Portafolio
