


import book1 from './book1.jpg'
import book2 from './book2.jpg'
import book3 from './book3.jpg'
import book4 from './book4.jpg'
import img1 from './img1.webp'
import img2 from './img2.jpg'

export default function Card(props) {
    return (
                     <div className="col-2 col-xxl-2 col-md-3  col-sm-6">

                    <img src={book1} className="small-img" alt=""/>
                    <blockquote className="blockquote">
                        <figure className="text-center">
                        <blockquote className="blockquote">
                            <p> {props.title}</p>
                        </blockquote>
                        <figcaption className="blockquote-footer">
                            <cite title="Source Title"> { props.author} </cite>
                        </figcaption>
                        <div className="bottom-text"> { props.type } </div> 
                        <div className="bottom-text"> <s> { props.oldPrice}</s> {props.newPrice} </div> 
                        <button type="button" className="btn btn-outline-dark btn-sm">Buy Now</button>

                        <button type="button" className="btn btn-outline-dark btn-sm">Add to Basket</button>


                        </figure>              
                        
                    </blockquote>
                    </div>


    )
}