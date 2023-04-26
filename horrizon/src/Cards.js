import React from 'react'

const Cards = () => {
  return (
    <div>
        <div className="container container-1">
	<h2 className="text-center">PLANS</h2>
	<div className="row d-flex justify-content-between">
		<div className="card" style={{width: "15rem"}}>
  <img src="img/meetings.avif" className="card-img-top" alt="..." />
  <div className="card-body">
  	<h4>Conference room</h4>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
<div className="card" style={{width: "15rem"}}>
  <img src="img/serviced.avif" className="card-img-top" alt="..." />
  <div className="card-body">
  	<h4>Serviced office</h4>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
<div className="card" style={{width: "15rem"}}>
  <img src="img/natureview.avif" className="card-img-top" alt="..." />
  <div className="card-body">
    <h4>Garden view </h4>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
<div className="card" style={{width: "15rem"}}>
  <img src="img/executive.avif" className="card-img-top" alt="..." />
  <div className="card-body">
    <h4>Executive office</h4>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>

		
	</div>
	
</div>
    </div>
  )
}

export default Cards