import book1 from './book1.jpg'
import book2 from './book2.jpg'
import book3 from './book3.jpg'
import book4 from './book4.jpg'
import img1 from './img1.webp'
import img2 from './img2.jpg'
import { useState } from 'react'



export default function Row() {

    const [cardData, setCardData] = useState(
        {title: "1984", author: "George Orwell", type: "Hardback & Paperback", oldPrice: "£15.00", newPrice: "£10.00"}
    )

    return (
        <div className="container">
          <div className="display-3" >Bestsellers  </div>
          <div className="row align-items-start">
            <div className="col-2 col-xxl-2 col-md-3  col-sm-6">
              <img src={book1} className="small-img" alt=""/>
              <blockquote className="blockquote">
                <figure className="text-center">
                  <blockquote className="blockquote">
                    <p> {cardData.title}</p>
                  </blockquote>
                  <figcaption className="blockquote-footer">
                    <cite title="Source Title"> { cardData.author} </cite>
                  </figcaption>
                  <div className="bottom-text"> { cardData.type } </div> 
                  <div className="bottom-text"> <s> { cardData.oldPrice}</s> {cardData.newPrice} </div> 
                  <button type="button" className="btn btn-outline-dark btn-sm">Buy Now</button>

                  <button type="button" className="btn btn-outline-dark btn-sm">Add to Basket</button>


                </figure>              
                
              </blockquote>

            </div>
            <div className="col-2 col-xxl-2 col-md-3  col-sm-6">
              <img src={book2} className="small-img" alt=""/>
              <blockquote className="blockquote">
                <figure className="text-center">
                  <blockquote className="blockquote">
                    <p>The Great Gatsby</p>
                  </blockquote>
                  <figcaption className="blockquote-footer">
                    <cite title="Source Title">F. Scott Fitzgerald</cite>
                  </figcaption>

                    <div className="bottom-text"> Hardback & Paperback </div> 
                    <div className="bottom-text"> <s>£15.00</s> £10.00</div> 
                    <button type="button" className="btn btn-outline-dark btn-sm">Buy Now</button>
  
                    <button type="button" className="btn btn-outline-dark btn-sm">Add to Basket</button>
                </figure>              
              </blockquote>

            </div>
            <div className="col-2 col-xxl-2 col-md-3  col-sm-6">
              <img src={book3} className="small-img" alt=""/>
              <blockquote className="blockquote">
                <figure className="text-center">
                  <blockquote className="blockquote">
                    <p>The Little Prince</p>
                  </blockquote>
                  <figcaption className="blockquote-footer">
                    <cite title="Source Title">Antoine De Saint-Exupery</cite>
                  </figcaption>
                  <div className="bottom-text"> Hardback & Paperback </div> 
                  <div className="bottom-text"> <s>£15.00</s> £10.00</div> 
                  <button type="button" className="btn btn-outline-dark btn-sm">Buy Now</button>

                  <button type="button" className="btn btn-outline-dark btn-sm">Add to Basket</button>

                </figure>              
              </blockquote>

            </div>
            <div className="col-2 col-xxl-2 col-md-3  col-sm-6">
              <img src={book4} className="small-img" alt=""/>
              <blockquote className="blockquote">
                <figure className="text-center">
                  <blockquote className="blockquote">
                    <p>I'm Glad My Mom Died</p>
                  </blockquote>
                  <figcaption className="blockquote-footer">
                    <cite title="Source Title">Jennette McCurdy</cite>
                  </figcaption>
                  <div className="bottom-text"> Hardback & Paperback </div> 
                  <div className="bottom-text"> <s>£15.00</s> £10.00</div> 
                  <button type="button" className="btn btn-outline-dark btn-sm">Buy Now</button>

                  <button type="button" className="btn btn-outline-dark btn-sm">Add to Basket</button>

                </figure>              
              </blockquote>

            </div>
            <div className="col-2 col-xxl-2 col-md-3  col-sm-6">
              <img src={book1} className="small-img" alt=""/>
              <blockquote className="blockquote">
                <figure className="text-center">
                  <blockquote className="blockquote">
                    <p>1984</p>
                  </blockquote>
                  <figcaption className="blockquote-footer">
                    <cite title="Source Title">George Orwell</cite>
                  </figcaption>
                  <div className="bottom-text"> Hardback & Paperback </div> 
                  <div className="bottom-text"> <s>£15.00</s> £10.00</div> 
                  <button type="button" className="btn btn-outline-dark btn-sm">Buy Now</button>

                  <button type="button" className="btn btn-outline-dark btn-sm">Add to Basket</button>

                </figure>              
              </blockquote>

            </div>
            <div className="col-2 col-xxl-2 col-md-3  col-sm-6">
              <img src={book2} className="small-img" alt=""/>
              <blockquote className="blockquote">
                <figure className="text-center">
                  <blockquote className="blockquote">
                    <p>The Great Gatsby</p>
                  </blockquote>
                  <figcaption className="blockquote-footer">
                    <cite title="Source Title">F. Scott Fitzgerald</cite>
                  </figcaption>
                  <div className="bottom-text"> Hardback & Paperback </div> 
                  <div className="bottom-text"> <s>£15.00</s> £10.00</div> 
                  <button type="button" className="btn btn-outline-dark btn-sm">Buy Now</button>

                  <button type="button" className="btn btn-outline-dark btn-sm">Add to Basket</button>

                </figure>              
              </blockquote>

            </div>

        </div>
        </div>



    )
}