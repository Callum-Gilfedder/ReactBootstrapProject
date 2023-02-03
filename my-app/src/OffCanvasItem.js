
import book1 from './images/book1.webp'
import { MyContext } from "./Contexts/Context.js"
import { useContext } from "react";



export default function OffCanvasItem (props) {
    const { count1, setCount1 } = useContext(MyContext);
    const { count2, setCount2 } = useContext(MyContext);
    const { count3, setCount3 } = useContext(MyContext);
    const { count4, setCount4 } = useContext(MyContext);
    const { count5, setCount5 } = useContext(MyContext);
    const { count6, setCount6 } = useContext(MyContext);   



    let count = 0;
    function handleClickPlus() {
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

    function handleClickMinus() {
        if (props.title == "1984") {
            setCount1(count1 - 1)
        } else if (props.title == "The Great Gatsby") {
            setCount2(count2 - 1)
        } else if (props.title == "The Little Prince") {
            setCount3(count3 - 1)
        } else if (props.title == "Im Glad My Mom Died") {
            setCount4(count4 - 1)
        } else if (props.title == "The Catcher In The Rye") {
            setCount5(count5 - 1)
        } else if (props.title == "A Clockwork Orange") {
            setCount6(count6 - 1)
        }
    }



    return (
        <div className="basket-item-container">
            <div class="row">
                <div class="col-sm basket-item-container-left">
                <img src={props.image} className="small-img offcanvas-img " alt="" />
                </div>
                <div class="col-sm basket-item-container-right">
                    <b> <p> {props.title} </p> </b>
                    <p> <s> {props.oldPrice}</s>  {props.newPrice} {count1} </p>
                    <div class="btn-group" role="group" aria-label="Basic outlined example">
                    <button type="button" class="btn btn-outline-secondary" onClick={handleClickMinus}> - </button>
                    <button type="button" class="btn btn-outline-secondary"> {count2}</button>
                    <button type="button" class="btn btn-outline-secondary" onClick={handleClickPlus}> + </button>
                    </div>
                </div>
            </div>


        </div>



    )
}