export default function DetailsPage(props) {
    return (
        <div className="container">
            <div class="container details-container" >
                <div class="row" >
                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12" >
                        <div className="details-img-container" >
                            <img src={props.image} className="details-img"></img>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12" >
                        <div className="details-title">{props.title}</div>
                        <h8 className="details-text-secondary">{props.author} -</h8>
                        <h8 className="details-text-secondary"> {props.type}</h8>

                        <p className="details-p">
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat
                        </p>
                        <div className="details-text-tertiary"><s>{props.oldPrice}</s> </div>
                        <div className="details-text-tertiary">{props.newPrice} </div>

                        <button type="button" className="btn btn-dark btn-md details-btn" style={{marginRight: "1rem"}}>Checkout</button>

                        <button type="button" className="btn btn-dark btn-md details-btn" onClick={() => {props.setCount(props.count + 1)}}>Add to Basket</button>
                    </div>
                </div>
                </div>

        </div>
        
    )
}