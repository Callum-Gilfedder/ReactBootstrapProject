
import OffCanvasItem from "./OffCanvasItem.js"

export default function OffCanvas() {
    return (
        <div className="offcanvas offcanvas-end" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
        <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasScrollingLabel">Your Basket</h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>

        <hr className="offcanvas-hr"></hr>

        <OffCanvasItem />
        <hr></hr>

        <OffCanvasItem />
        <hr></hr>

        <OffCanvasItem />
        <hr></hr>



        
        <div className="offcanvas-body">
            

        <div className="offcanvas-title">Total Cost: £100</div>
        </div>
        </div>

    )
}