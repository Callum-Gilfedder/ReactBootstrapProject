import contactImage from "./images/contact-image.webp"

export default function Contact () {
    return (
        <div>
            <div className="contact-image-container">
                 <img src={contactImage} className="contact-img"/>
                 <div className="contact-card-title contact-card-title-large">  Get in touch...</div>

            </div>
            <div className="contact-cards-container">

                <div className="contact-card">
                    <div className="contact-card-inner-container-upper">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone-fill" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                                </svg>
                            <div className="contact-card-title">  Contact Us</div>

                    </div>
                    <div className="contact-card-inner-container-lower">

                    <button type="button" class="btn btn-dark contact-card-buttons">Contact our general support team</button>
                    <div className="contact-card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. </div>

                    </div>
                </div>

                <div className="contact-card">
                    <div className="contact-card-inner-container-upper">

                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
  <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12z"/>
</svg>
                                <div className="contact-card-title">  Account Support</div>

                    </div>
                    <div className="contact-card-inner-container-lower">
                    <button type="button" class="btn btn-dark contact-card-buttons">Contact our account support team</button>
                    <div className="contact-card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. </div>
                    </div>
                </div>

                
            </div>
        </div>
    ) 
}