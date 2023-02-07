import CategoryCard from "./CategoryCard.js"
import scifiimage from "./images/sci-fi-image-modified.png"
import fictionimage from "./images/fiction-image-modified.png"
import nonfictionimage from "./images/non-fiction-modified.png"
import popularscienceimage from "./images/popular-science-image-modified.png"
import classicsimage from "./images/classics-image-modified.png"
import crimeimage from "./images/crime-image.png"

export default function CategoryRow () {
    return (
        <div className="container category-container">
        <div className="display-3 d-inline"> Popular Categories  </div>
        <hr></hr>
            <div className="row align-items-start" >
            <CategoryCard category="Fiction" image={fictionimage}/>
            <CategoryCard category="Non-Fiction" image={nonfictionimage}/>
            <CategoryCard category="Science Fiction" image={scifiimage}/>
            <CategoryCard category="Popular Science" image={popularscienceimage}/>
            <CategoryCard category="Classics" image={classicsimage}/>
            <CategoryCard category="Crime" image={crimeimage}/>
            </div>
        </div>
    )
}