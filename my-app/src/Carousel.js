export default function Carousel() {
    return (
        <div id="carouselExample" className="carousel slide">
          <div className="carousel-inner">
            <div className="carousel-item active text-center">
              <div className="display-1" >SALE <br/> 50% OFF</div>
              <button type="button" className="btn btn-outline-light">SHOP NOW</button>
            </div>
            <div className="carousel-item">
              <img src="img1.webp" className="d-block w-100" alt=""/>
              <div className="display-1" ></div>
            </div>
            <div className="carousel-item">
              <img src="img2.webp" className="d-block w-100" alt=""/>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
    )
}