import book1 from './book1.jpg'
import book2 from './book2.jpg'
import book3 from './book3.jpg'
import book4 from './book4.jpg'
import img1 from './img1.webp'
import img2 from './img2.jpg'
import { useState } from 'react'
import Card from './Card.js'


export default function Row() {

    const [cardData, setCardData] = useState(
        {title: "1984", author: "George Orwell", type: "Hardback & Paperback", oldPrice: "£15.00", newPrice: "£10.00"}
    )

    return (
        <div className="container">
        <div className="display-3" >Bestsellers  </div>
            <div className="row align-items-start">

            <Card title="1984" author="George Orwell" type="Hardback & Paperback" oldPrice = "£15.00" newPrice ="£10.00" />
            <Card title="1984" author="George Orwell" type="Hardback & Paperback" oldPrice = "£15.00" newPrice ="£10.00" />
            <Card title="1984" author="George Orwell" type="Hardback & Paperback" oldPrice = "£15.00" newPrice ="£10.00" />
            <Card title="1984" author="George Orwell" type="Hardback & Paperback" oldPrice = "£15.00" newPrice ="£10.00" />
            <Card title="1984" author="George Orwell" type="Hardback & Paperback" oldPrice = "£15.00" newPrice ="£10.00" />
            <Card title="1984" author="George Orwell" type="Hardback & Paperback" oldPrice = "£15.00" newPrice ="£10.00" />

            </div>

            
            
        </div>
        
           



    )
}