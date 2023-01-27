import CarouselImageBook from "./images/CarouselImageBook.png" 
import img1 from "./images/img1.webp"
import img2 from "./images/img2.webp"
import CarouselImageBook2 from "./images/CarouselImageBook2.png"
import CarouselImageBook3 from "./images/CarouselImageBook3.png"


export default function Carousel() {
    return (
        <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item">
            <div className="carousel-text-heading">'Conversations with Friends, Sally Rooney. '</div>
              <div className="carousel-text-small"> - Person</div>

              <button type="button" className="btn btn-outline-light carousel-button">Order now</button>

              <img src={img2} className="w-100 carousel-background-img" alt=""/>
              <img src={CarouselImageBook2} className="d-block w-100 small-carousel-img d-inline" alt=""/>
            </div>
            <div className="carousel-item active">
              <div className="carousel-text-heading">'Darkly funny and told with unflinching candour'</div>
              <div className="carousel-text-small"> - WaterStones</div>

              <button type="button" className="btn btn-outline-light carousel-button">Order now</button>

              <img src={img1} className="w-100 carousel-background-img" alt=""/>
              <img src={CarouselImageBook} className="d-block w-100 small-carousel-img d-inline" alt=""/>


              <div className="display-1" ></div>
            </div>
            <div className="carousel-item">
            <div className="carousel-text-heading">'Darkly funny and told with unflinching candour'</div>
              <div className="carousel-text-small"> - WaterStones</div>

              <button type="button" className="btn btn-outline-light carousel-button">Order now</button>

              <img src={img1} className="w-100 carousel-background-img" alt=""/>
              <img src={CarouselImageBook3} className="d-block w-100 small-carousel-img d-inline" alt=""/>            </div>
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