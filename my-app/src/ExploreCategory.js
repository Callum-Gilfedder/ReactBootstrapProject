import Row from "./Row.js"
import { useState } from "react"
import PopUp from "./PopUp.js";

export default function ExploreCategory(props) {
    const [popUpTriggered, setPopUpTriggered] = useState(false)
    function deactivatePopUp() {
        setPopUpTriggered(false);
    }
    setTimeout(deactivatePopUp, 5000)    


    return (
        <div>
        <Row rowtitle={"Explore Our " + props.category + " Collection (These are sample books)"} popUpTriggered={popUpTriggered} setPopUpTriggered={setPopUpTriggered}></Row>
        <Row rowtitle="" popUpTriggered={popUpTriggered} setPopUpTriggered={setPopUpTriggered}></Row>
        <Row rowtitle="" popUpTriggered={popUpTriggered} setPopUpTriggered={setPopUpTriggered}></Row>
        {popUpTriggered ? <PopUp></PopUp>: null}
        </div>
    )
}