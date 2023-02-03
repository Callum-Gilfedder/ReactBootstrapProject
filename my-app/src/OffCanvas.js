
import OffCanvasItem from "./OffCanvasItem.js"
import { MyContext } from "./Contexts/Context.js"
import { useContext } from "react"
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

    return (
        <div className="offcanvas offcanvas-end" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
        <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasScrollingLabel">Your Basket</h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>

        <hr className="offcanvas-hr"></hr>

        {count1 ? <> <OffCanvasItem setCount={setCount1} count={count1} title="1984" author="George Orwell" type="Hardback & Paperback" oldPrice = "£15.00" newPrice ="£10.00" image={book1} /> <hr></hr> </> : null}

        {count2 ? <><OffCanvasItem setCount={setCount2} count={count2} title="The Great Gatsby" author="F. Scott. Fitzgerald" type="Paperback Only" oldPrice = "£10.00" newPrice ="£6.50" image={book2}/>         <hr></hr></> : null}

        {count3 ? <><OffCanvasItem setCount={setCount3} count={count3} title="The Little Prince" author="A. D. Saint-Exupery" type="Hardback Only" oldPrice = "£11.00" newPrice ="£8.99" image={book3}/>     <hr></hr></> : null}



    



        
        <div className="offcanvas-body">
            

        <div className="offcanvas-title">Total Cost: £100</div>
        </div>
        </div>

    )
}