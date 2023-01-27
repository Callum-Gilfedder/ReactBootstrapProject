import contactImage from "./contact-image.webp"

export default function Contact () {
    return (
        <div>
            <div className="contact-image-container">
                 <img src={contactImage} className="contact-img"/>
            </div>
            <div className="contact-cards-container">

                <div className="contact-card">
                    <div className="contact-card-inner-container-upper"></div>
                    <div className="contact-card-inner-container-lower"></div>
                </div>

                <div className="contact-card">
                    <div className="contact-card-inner-container-upper"></div>
                    <div className="contact-card-inner-container-lower"></div>
                </div>
            </div>
        </div>
    ) 
}