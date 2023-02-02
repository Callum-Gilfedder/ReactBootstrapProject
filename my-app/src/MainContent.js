import Carousel from "./Carousel"
import Row from "./Row.js"
import OffCanvas from "./OffCanvas.js"
import CategoryRow from "./CategoryRow.js"

export default function MainContent() {
    return (
        <div>
            
            <Carousel />
            
            <Row rowtitle = "New In"/>
            <CategoryRow/>

            <Row rowtitle = "Best Sellers" />
            <Row rowtitle = "Classics" />

            <Row rowtitle = "Collection" />

            {/* OffCanvas */}
            <OffCanvas />



        </div>
    )
}