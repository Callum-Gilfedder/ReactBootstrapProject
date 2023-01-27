import book1 from './images/book1.jpg'
import book2 from './images/book2.jpg'
import book3 from './images/book3.jpg'
import book4 from './images/book4.jpg'
import book5 from './images/book5.jpg'
import book6 from './images/book6.jpg'
import img1 from './images/img1.webp'
import img2 from './images/img2.jpg'
import { useState } from 'react'
import Card from './Card.js'


export default function Row(props) {

    return (
        <div className="container">
        <hr></hr>
        <div className="display-3 d-inline"> {props.rowtitle}  </div>


            <div className="row align-items-start">

            <Card title="1984" author="George Orwell" type="Hardback & Paperback" oldPrice = "£15.00" newPrice ="£10.00" image={book1}/>
            <Card title="The Great Gatsby" author="F. Scott. Fitzgerald" type="Paperback Only" oldPrice = "£10.00" newPrice ="£6.50" image={book2} />
            <Card title="The Little Prince" author="A. D. Saint-Exupery" type="Hardback Only" oldPrice = "£11.00" newPrice ="£8.99" image={book3} />
            <Card title="Im Glad My Mom Died" author="Jennette McCurdy" type="Hardback & Paperback" oldPrice = "£20.00" newPrice ="£15.00" image={book4} />
            <Card title="The Catcher In The Rye" author="J. D. Salinger" type="Hardback & Paperback" oldPrice = "£10.00" newPrice ="£8.00" image={book5}/>
            <Card title="A Clockwork Orange" author="Anthony Burgess" type="Hardback Only" oldPrice = "8.00" newPrice ="£4.50" image={book6}/>
            

            </div>
            
            
            
        </div>
        
        
           



    )
}