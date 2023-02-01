import CategoryCard from "./CategoryCard.js"
import scifiimage from "./images/sci-fi-image-modified.png"
import fictionimage from "./images/fiction-image-modified.png"
import nonfictionimage from "./images/non-fiction-modified.png"
import popularscienceimage from "./images/popular-science-image-modified.png"


export default function Categories () {
    return (
        <div className="container category-container">
            <div className="display-3 d-inline"> Browse Categories  </div>
                <hr></hr>
                <div className="row align-items-start category-row" >
                <CategoryCard category="Fiction" image={fictionimage}/>
                <CategoryCard category="Non-Fiction" image={nonfictionimage}/>
                <CategoryCard category="Science Fiction" image={scifiimage}/>
                <CategoryCard category="Popular Science" image={popularscienceimage}/>
                <CategoryCard category="Classics" image={scifiimage}/>
                <CategoryCard category="Crime" image={scifiimage}/>
                </div>
                <hr></hr>
                <div className="row align-items-start category-row" >
                <CategoryCard category="Graphic Novels" subcategory1="Historical Fiction" image={scifiimage}/>
                <CategoryCard category="History" image={scifiimage}/>
                <CategoryCard category="Cooking" image={scifiimage}/>
                <CategoryCard category="Fantasy" image={scifiimage}/>
                <CategoryCard category="Romance" image={scifiimage}/>
                <CategoryCard category="Textbooks" image={scifiimage}/>
                </div>
                <hr></hr>
                <div className="row align-items-start category-row" >
                <CategoryCard category="Arts" subcategory1="Historical Fiction" image={scifiimage}/>
                <CategoryCard category="Travel" image={scifiimage}/>
                <CategoryCard category="Politics" image={scifiimage}/>
                <CategoryCard category="Religion" image={scifiimage}/>
                <CategoryCard category="Humor" image={scifiimage}/>
                <CategoryCard category="Biography" image={scifiimage}/>
                </div>
                <hr></hr>

            </div>
        
    ) 
}