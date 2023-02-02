import CategoryCard from "./CategoryCard.js"
import scifiimage from "./images/sci-fi-image-modified.png"
import fictionimage from "./images/fiction-image-modified.png"
import nonfictionimage from "./images/non-fiction-modified.png"
import popularscienceimage from "./images/popular-science-image-modified.png"
import classicsimage from "./images/classics-image-modified.png"
import crimeimage from "./images/crime-image.png"
import graphicnovelimage from "./images/graphic-novel-image.png"
import historyimage from "./images/history-image.png"
import cookingimage from "./images/cooking-image.png"
import fantasyimage from "./images/fantasy-image.png"
import romanceimage from "./images/romance-image.png"
import textbookimage from "./images/textbook-image.png"
import artsimage from "./images/arts-image.png"
import travelimage from "./images/travel-image.png"
import politicsimage from "./images/politics-image.png"
import religionimage from "./images/religion-image.png"
import humorimage from "./images/humor-image.png"
import biographyimage from "./images/biography-image.png"




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
                <CategoryCard category="Classics" image={classicsimage}/>
                <CategoryCard category="Crime" image={crimeimage}/>
                </div>
                <hr></hr>
                <div className="row align-items-start category-row" >
                <CategoryCard category="Graphic Novels" subcategory1="Historical Fiction" image={graphicnovelimage}/>
                <CategoryCard category="History" image={historyimage}/>
                <CategoryCard category="Cooking" image={cookingimage}/>
                <CategoryCard category="Fantasy" image={fantasyimage}/>
                <CategoryCard category="Romance" image={romanceimage}/>
                <CategoryCard category="Textbooks" image={textbookimage}/>
                </div>
                <hr></hr>
                <div className="row align-items-start category-row" >
                <CategoryCard category="Arts" subcategory1="Historical Fiction" image={artsimage}/>
                <CategoryCard category="Travel" image={travelimage}/>
                <CategoryCard category="Politics" image={politicsimage}/>
                <CategoryCard category="Religion" image={religionimage}/>
                <CategoryCard category="Humor" image={humorimage}/>
                <CategoryCard category="Biography" image={biographyimage}/>
                </div>
                <hr></hr>

            </div>
        
    ) 
}