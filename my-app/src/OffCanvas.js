
import OffCanvasItem from "./OffCanvasItem.js"
import { MyContext } from "./Contexts/Context.js"
import { useContext } from "react"
import { Link } from "react-router-dom"
import book1 from './images/book1.webp'
import book2 from './images/book2.jpg'
import book3 from './images/book3.jpg'
import book4 from './images/book4.jpg'
import book5 from './images/book5.jpg'
import book6 from './images/book6.jpg'

export default function OffCanvas(props) {
    const { count1, setCount1 } = useContext(MyContext);
    const { count2, setCount2 } = useContext(MyContext);
    const { count3, setCount3 } = useContext(MyContext);
    const { count4, setCount4 } = useContext(MyContext);
    const { count5, setCount5 } = useContext(MyContext);
    const { count6, setCount6 } = useContext(MyContext);    
    const { newPrice1, newPrice2, newPrice3, newPrice4, newPrice5, newPrice6 } = useContext(MyContext);
    let itemCount = 0;
    console.log(itemCount)
    
    return (
        <div className="offcanvas offcanvas-end" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
        <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasScrollingLabel">Your Basket</h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>

        <hr className="offcanvas-hr"></hr>

        {count1 && itemCount < 3 ? <> <div class="hidden"> {itemCount = itemCount + 1} </div> <OffCanvasItem setCount={setCount1} count={count1} title="1984" author="George Orwell" type="Hardback & Paperback" oldPrice = "£15.00" newPrice ="£10.00" image={book1}/><hr></hr></> : null}
        {count2 && itemCount < 3 ? <> <div class="hidden"> {itemCount = itemCount + 1} </div> <OffCanvasItem setCount={setCount2} count={count2} title="The Great Gatsby" author="F. Scott. Fitzgerald" type="Paperback Only" oldPrice = "£10.00" newPrice ="£6.50" image={book2}/>         <hr></hr></> : null}
        {count3 && itemCount < 3 ? <> <div class="hidden"> {itemCount = itemCount + 1} </div> <OffCanvasItem setCount={setCount3} count={count3} title="The Little Prince" author="A. D. Saint-Exupery" type="Hardback Only" oldPrice = "£11.00" newPrice ="£8.99" image={book3}/>     <hr></hr></> : null}
        {count4 && itemCount < 3 ? <> <div class="hidden"> {itemCount = itemCount + 1} </div> <OffCanvasItem setCount={setCount4} count={count4} title="Im Glad My Mom Died" author="Jennette McCurdy" type="Hardback & Paperback" oldPrice = "£20.00" newPrice ="£15.00" image={book4}/>     <hr></hr></> : null}
        {count5 && itemCount < 3 ? <> <div class="hidden"> {itemCount = itemCount + 1} </div> <OffCanvasItem setCount={setCount5} count={count5} title="The Catcher In The Rye" author="J. D. Salinger" type="Hardback & Paperback" oldPrice = "£10.00" newPrice ="£8.00" image={book5}/>     <hr></hr></> : null}
        {count6 && itemCount < 3 ? <> <div class="hidden"> {itemCount = itemCount + 1} </div> <OffCanvasItem setCount={setCount6} count={count6} title="A Clockwork Orange" author="Anthony Burgess" type="Hardback Only" oldPrice = "8.00" newPrice ="£4.50" image={book6}/>     <hr></hr></> : null}

        <div className="offcanvas-body">
            

        <div className="offcanvas-title">Total Cost: £{((count1 * newPrice1) + (count2 * newPrice2) + (count3 * newPrice3) + (count4 * newPrice4) + (count5  * newPrice5) + (count6 * newPrice6)).toFixed(2)}</div> <Link to="/404-not-found"><button type="button" className="btn btn-outline-dark btn-md w-100"> Proceed to Checkout </button> </Link>
        </div>
        </div>

    )
}