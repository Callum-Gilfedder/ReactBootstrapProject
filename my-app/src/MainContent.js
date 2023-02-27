import Carousel from "./Carousel"
import Row from "./Row.js"
import OffCanvas from "./OffCanvas.js"
import CategoryRow from "./CategoryRow.js"
import PopUp from "./PopUp.js"
import { useState } from "react"

export default function MainContent(props) {
    const [popUpTriggered, setPopUpTriggered] = useState(false)
    function deactivatePopUp() {
        setPopUpTriggered(false);
    }
    setTimeout(deactivatePopUp, 5000)    

    return (
        <div>
            

            <Carousel />
            
            <Row rowtitle = "New In" setCount = {props.setCount} count={props.count} popUpTriggered={popUpTriggered} setPopUpTriggered={setPopUpTriggered}/>
            <CategoryRow/>

            <Row rowtitle = "Best Sellers" popUpTriggered={popUpTriggered} setPopUpTriggered={setPopUpTriggered}/>
            <Row rowtitle = "Classics" popUpTriggered={popUpTriggered} setPopUpTriggered={setPopUpTriggered}/>

            <Row rowtitle = "Collection" popUpTriggered={popUpTriggered} setPopUpTriggered={setPopUpTriggered}/>

            {/* OffCanvas */}
            <OffCanvas setCount = {props.setCount} count={props.count}/>

            {popUpTriggered ? <PopUp></PopUp> : null}




        </div>
    )
}