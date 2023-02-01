import CategoryCard from "./CategoryCard.js"
import scifiimage from "./images/sci-fi-image.jpg"

export default function Categories () {
    return (
        <div className="container category-container">
            <div className="display-3 d-inline"> Browse Categories  </div>
                <hr></hr>
                <div className="row align-items-start category-row" >
                <CategoryCard category="Fiction" subcategory1="Historical Fiction" image={scifiimage}/>
                <CategoryCard category="Non-Fiction" image={scifiimage}/>
                <CategoryCard category="Science Fiction" image={scifiimage}/>
                <CategoryCard category="Popular Science" image={scifiimage}/>
                <CategoryCard category="Classics" image={scifiimage}/>
                <CategoryCard category="Crime" image={scifiimage}/>
                </div>
                <hr></hr>
                <div className="row align-items-start category-row" >
                <CategoryCard category="Fiction" subcategory1="Historical Fiction" image={scifiimage}/>
                <CategoryCard category="Non-Fiction" image={scifiimage}/>
                <CategoryCard category="Science Fiction" image={scifiimage}/>
                <CategoryCard category="Popular Science" image={scifiimage}/>
                <CategoryCard category="Classics" image={scifiimage}/>
                <CategoryCard category="Crime" image={scifiimage}/>
                </div>
                <hr></hr>
                <div className="row align-items-start category-row" >
                <CategoryCard category="Fiction" subcategory1="Historical Fiction" image={scifiimage}/>
                <CategoryCard category="Non-Fiction" image={scifiimage}/>
                <CategoryCard category="Science Fiction" image={scifiimage}/>
                <CategoryCard category="Popular Science" image={scifiimage}/>
                <CategoryCard category="Classics" image={scifiimage}/>
                <CategoryCard category="Crime" image={scifiimage}/>
                </div>
                <hr></hr>

            </div>
        
    ) 
}