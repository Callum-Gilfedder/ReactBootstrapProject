
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        // <!-- NAVBAR  -->
        <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary sticky-top">
            <div className="container-fluid">
              <a className="navbar-brand" href="#"> <Link to="/" style={{textDecoration: "none", color: "black" }}> BookStore</Link></a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#"><Link to="/" style={{textDecoration: "none", color: "black" }}>HOME</Link></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" href="#"> <Link to="/contact" style={{textDecoration: "none", color: "black" }}>CONTACT</Link></a>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle active" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      CATEGORIES
                    </a>
                    <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">View All</a></li>
                      <li><hr class="dropdown-divider"></hr></li>

                      <li><a className="dropdown-item" href="#">Best Sellers</a></li>
                      <li><hr class="dropdown-divider"></hr></li>

                      <li><a className="dropdown-item" href="#">Crime</a></li>
                      <li><hr class="dropdown-divider"></hr></li>

                      <li><a className="dropdown-item" href="#">Classics</a></li>
                      <li><hr class="dropdown-divider"></hr></li>

                      <li><a className="dropdown-item" href="#">Sci-Fi</a></li>
                      <li><hr class="dropdown-divider"></hr></li>

                      <li><a className="dropdown-item" href="#">Fantasy</a></li>
                      <li><hr class="dropdown-divider"></hr></li>

                      <li><a className="dropdown-item" href="#">Fiction</a></li>
                      <li><hr class="dropdown-divider"></hr></li>

                      <li><a className="dropdown-item" href="#">Non-Fiction</a></li>
                      <li><hr class="dropdown-divider"></hr></li>

                      <li><a className="dropdown-item" href="#">Geography</a></li>
                      <li><hr class="dropdown-divider"></hr></li>

                      <li><a className="dropdown-item" href="#">History</a></li>
                      <li><hr class="dropdown-divider"></hr></li>

                      <li><a className="dropdown-item" href="#">Popular Science</a></li>


                    </ul>
                  </li>
                  <form className="d-flex" role="search">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                  <button className="btn btn-outline-dark" type="submit">Search</button>
                  </form>

                </ul>


                
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-basket3-fill" viewBox="0 0 16 16" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">
  <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM2.468 15.426.943 9h14.114l-1.525 6.426a.75.75 0 0 1-.729.574H3.197a.75.75 0 0 1-.73-.574z"/>
</svg>


              </div>
            </div>
          </nav>

    )
}