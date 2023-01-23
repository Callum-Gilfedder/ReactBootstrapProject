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

            {/* OffCanvas */}
            <div class="offcanvas offcanvas-end" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
            <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasScrollingLabel">Your Basket</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
            <p>Body of offcanvas</p>
            </div>
            </div>


        </div>
    )
}