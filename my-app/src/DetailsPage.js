export default function DetailsPage(props) {
    return (
        <div className="container">
            <h1>{props.title}</h1>
            <div class="container text-center">
                <div class="row">
                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <div className="details-page-img-container">
                            <img src={props.image}></img>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12" >
                        <h1>{props.title}</h1>
                        <h1>{props.author}</h1>
                        <h1>{props.type}</h1>
                        <h1>{props.oldPrice}</h1>
                        <h1>{props.newPrice}</h1>
                        <p>Lorem ipsum dolor mit sum etc.

                        </p>
                    </div>
                </div>
                </div>

        </div>
        
    )
}