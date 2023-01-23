import Carousel from "./Carousel"
import Row from "./Row.js"
import Banner from './Banner.js'

export default function MainContent() {
    return (
        <div>
            <Carousel />
            <Row rowtitle = "Bestsellers"/>
            <Banner />
            <Row rowtitle = "Classics" />
            <Banner />
        </div>
    )
}