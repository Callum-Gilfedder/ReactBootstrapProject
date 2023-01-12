import Carousel from "./Carousel"
import Row from "./Row.js"
import Banner from './Banner.js'

export default function MainContent() {
    return (
        <div>
            <Carousel />
            <Row />
            <Banner />
            <Row />
            <Banner />
        </div>
    )
}