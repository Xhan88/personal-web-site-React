import React from 'react'
import '../Carousel/Carousel.css'

const Carousel = () => {
  return (
    <div>
      <div id="carouselExample" className="carousel slide ">
        <div className="carousel-inner">

          <div className="carousel-item active img-style">
              <a href="https://github.com/Xhan88/Buscdor-De-Gifs">
                  <img 
                  src="/proyect-01.jpg"  
                  className="d-block  img-proyect" 
                  alt=""/>
              </a>

              <a href="https://github.com/Xhan88/proyecto-final-e-commerce">
                  <img 
                  src="/proyect-02.jpg" 
                  className="d-block  img-proyect" 
                  alt=""/>
              </a>

              <a href="https://github.com/Xhan88/Blog-To-News">
                  <img 
                  src="/proyect-03.jpg" 
                  className="d-block  img-proyect" 
                  alt=""/>
              </a>
                
          </div>

   <div className="carousel-item img-style">
        <a href="https://github.com/Xhan88/Festival-de-musica">
                <img 
                src="/proyect-04.jpg" 
                className="d-block  img-proyect"  
                alt=""/>
        </a>

        <a href="https://github.com/Xhan88/challeng-3"> 
                <img 
                src="/proyect-05.jpg" 
                className="d-block  img-proyect" 
                alt=""/>
        </a>

        <a href="https://github.com/Xhan88/game-memo">      
                <img 
                src="/proyect-06.jpg" 
                className="d-block  img-proyect" 
                alt=""/>
        </a>
    </div>

  </div>

  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden ">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default Carousel
