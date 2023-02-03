


import { useState } from 'react'
import { Link } from 'react-router-dom'




export default function Card(props) {
    const [isHovered, setIsHovered] = useState(false)


    return (        
                    <div className="col-2 col-xxl-2 col-md-3  col-sm-6">
                    {/* {isHovered && <div className="hover-add-basket" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} style={{ transition: 'opacity 0.3s ease-in', opacity: isHovered ? 1 : 0}} > <button type="button" class="btn btn-secondary btn-lg"> &#10009; </button></div>  } */}
                    
                    <Link to={"/"+ props.title.replace(/\s+/g, '')} style={{textDecoration: "none", color: "black" }}><img src={props.image} className="small-img" alt="" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} /></Link>
                    <blockquote className="blockquote">
                        <figure className="text-center">
                        <blockquote className="blockquote">
                            
                        <Link to={"/"+ props.title.replace(/\s+/g, '')} style={{textDecoration: "none", color: "black" }}><p> {props.title}</p> </Link>
                            
                        </blockquote>
                        <figcaption className="blockquote-footer">
                            <cite title="Source Title"> { props.author} </cite>
                        </figcaption>
                        <div className="bottom-text"> { props.type } </div> 
                        <div className="bottom-text"> <s> { props.oldPrice}</s> {props.newPrice} </div> 
                        <Link to={"/"+ props.title.replace(/\s+/g, '')} style={{textDecoration: "none", color: "black" }}><button type="button" className="btn btn-outline-dark btn-sm" style={{marginRight: "1rem"}}>Info</button></Link>

                        <button type="button" className="btn btn-outline-dark btn-sm"  onClick={() => {props.setCount(props.count + 1)}}> Add to Basket</button>


                        </figure>              
                    
                    </blockquote>
                    </div>


    )
}