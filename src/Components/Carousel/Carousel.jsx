import React from 'react'
import '../Carousel/Carousel.css'

const Carousel = () => {
  return (
    <div>
      <div id="carouselExampleFade" className="carousel slide carousel-fade">
  <div className="carousel-inner">

    <div className="carousel-item active img-style">
      <img src="/proyect-01.jpg" className="d-block  img-proyect"  alt="..."/>
      <img src="/proyect-02.jpg" className="d-block  img-proyect" alt="..."/>
      <img src="/proyect-03.jpg" className="d-block  img-proyect" alt="..."/>
    </div>

   <div className="carousel-item img-style">
      <img src="/proyect-04.jpg" className="d-block  img-proyect"  alt="..."/>
      <img src="/proyect-05.jpg" className="d-block  img-proyect" alt="..."/>
      <img src="/proyect-06.jpg" className="d-block  img-proyect" alt="..."/>
    </div>

  </div>

  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden ">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default Carousel

{/* <div id="carouselExampleFade" class="carousel slide carousel-fade">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="..." class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div> */}