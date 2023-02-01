


import { useState } from 'react'
import { Link } from 'react-router-dom'




export default function Card(props) {
    const [isHovered, setIsHovered] = useState(false)


    return (        
                    <div className="col-2 col-2-categories col-xxl-2 col-md-3  col-sm-6">
                        
                    
                    <Link to={"/categories/"+ props.category.replace(/\s+/g, '')} style={{textDecoration: "none", color: "black" }}><img src={props.image} className="small-img small-img-categories" alt="" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} /></Link>
                    <blockquote className="blockquote">
                        <figure className="text-center">
                        <blockquote className="blockquote">
                            
                        <Link to={"/categories/"+ props.category.replace(/\s+/g, '')} style={{textDecoration: "none", color: "black" }}><p> {props.category}</p> </Link>
                            
                        </blockquote>
                        


                        </figure>              
                    
                    </blockquote>
                    </div>


    )
}