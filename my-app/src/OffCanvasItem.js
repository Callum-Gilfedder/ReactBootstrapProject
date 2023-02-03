
import book1 from './images/book1.webp'
import { MyContext } from "./Contexts/Context.js"
import { useContext } from "react";



export default function OffCanvasItem (props) {
    const { count } = useContext(MyContext);


    return (
        <div className="basket-item-container">
            <div class="row">
                <div class="col-sm basket-item-container-left">
                <img src={book1} className="small-img offcanvas-img " alt="" />
                </div>
                <div class="col-sm basket-item-container-right">
                    <b> <p>Im Glad My Mom Died </p> </b>
                    <p> <s> £15.00</s>  {props.total} {count} </p>
                    <div class="btn-group" role="group" aria-label="Basic outlined example">
                    <button type="button" class="btn btn-outline-secondary" onClick={() => props.setCount(props.count - 1)}> - </button>
                    <button type="button" class="btn btn-outline-secondary"> {props.count}</button>
                    <button type="button" class="btn btn-outline-secondary" onClick={() => props.setCount(props.count + 1)}> + </button>
                    </div>
                </div>
            </div>


        </div>



    )
}