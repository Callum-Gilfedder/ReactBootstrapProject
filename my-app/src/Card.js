


import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useContext } from "react"
import { MyContext } from './Contexts/Context'






export default function Card(props) {
    const [isHovered, setIsHovered] = useState(false)
    const { count1, setCount1 } = useContext(MyContext);
    const { count2, setCount2 } = useContext(MyContext);
    const { count3, setCount3 } = useContext(MyContext);
    const { count4, setCount4 } = useContext(MyContext);
    const { count5, setCount5 } = useContext(MyContext);
    const { count6, setCount6 } = useContext(MyContext);
    
    
    function handleClickPlus() {
        props.setPopUpTriggered(true)
        if (props.title == "1984") {
            setCount1(count1 + 1)
        } else if (props.title == "The Great Gatsby") {
            setCount2(count2 + 1)
        } else if (props.title == "The Little Prince") {
            setCount3(count3 + 1)
        } else if (props.title == "Im Glad My Mom Died") {
            setCount4(count4 + 1)
        } else if (props.title == "The Catcher In The Rye") {
            setCount5(count5 + 1)
        } else if (props.title == "A Clockwork Orange") {
            setCount6(count6 + 1)
        }
    }

    return (        
                    <div className="col-6 col-xxl-2 col-md-3  col-sm-6 col-xs-12">
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

                        <button type="button" className="btn btn-outline-dark btn-sm"    aria-controls="offcanvasScrolling" onClick={handleClickPlus}>Add to Basket</button>


                        </figure>              
                    
                    </blockquote>
                    
                    </div>




    )
}