import CategoryCard from "./CategoryCard.js"
import book1 from "./images/book1.jpg"

export default function Categories () {
    return (
        <div className="container category-container">
            <div className="display-3 d-inline"> Browse Categories  </div>
                <hr></hr>
                <div className="row align-items-start" style={{"margin-botton":"5rem"}}>
                <CategoryCard category="Fiction" subcategory1="Historical Fiction" subcategory2="Historical Fiction" subcategory3="Historical Fiction" image={book1}/>
                <CategoryCard category="Non-Fiction" image={book1}/>
                <CategoryCard category="Science Fiction" image={book1}/>
                <CategoryCard category="Popular Science" image={book1}/>
                <CategoryCard category="Classics" image={book1}/>
                <CategoryCard category="Crime" image={book1}/>

                </div>
                <hr></hr>
                <div className="row align-items-start" style={{"margin-botton":"5rem"}}>


                </div>
                <hr></hr>

                <div className="row align-items-start" style={{"margin-botton":"5rem"}}>

                </div>
            </div>
        
    ) 
}