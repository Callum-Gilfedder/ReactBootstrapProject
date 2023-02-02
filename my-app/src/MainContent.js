import Carousel from "./Carousel"
import Row from "./Row.js"
import OffCanvas from "./OffCanvas.js"
import CategoryRow from "./CategoryRow.js"

export default function MainContent(props) {
    return (
        <div>
            
            <Carousel />
            
            <Row rowtitle = "New In" setCount = {props.setCount} count={props.count}/>
            <CategoryRow/>

            <Row rowtitle = "Best Sellers" />
            <Row rowtitle = "Classics" />

            <Row rowtitle = "Collection" />

            {/* OffCanvas */}
            <OffCanvas setCount = {props.setCount} count={props.count}/>



        </div>
    )
}