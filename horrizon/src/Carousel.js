import React from 'react'

const Carousel = () => {
  return (
    <div>
        <div id="carouselExampleInterval" class="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" data-interval="10000">
      <img src="img/headquarters.avif" height="500px" width="100%"  alt="..." />
    </div>
    <div className="carousel-item" data-interval="2000">
      <img src="img/headqauters.avif" height="500px;" width="100%"  alt="..." />
    </div>
   </div>
      <button className="carousel-control-prev" type="button" data-target="#carouselExampleInterval" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </button>
      <button className="carousel-control-next" type="button" data-target="#carouselExampleInterval" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
     </button>
</div>
    </div>
  )
}

export default Carousel