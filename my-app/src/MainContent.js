import Carousel from "./Carousel"
import Row from "./Row.js"
import Banner from './Banner.js'

export default function MainContent() {
    return (
        <div>
            <Carousel />
            <Row rowtitle = "New In"/>
            <Row rowtitle = "Best Sellers" />
            <Row rowtitle = "Classics" />
            <Row rowtitle = "Collection" />


        </div>
    )
}