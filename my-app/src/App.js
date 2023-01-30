import logo from './logo.svg';
import Navbar from './Navbar.js' 
import Footer from './Footer.js'
import MainContent from './MainContent.js'
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Contact from './Contact.js'
import "bootstrap/dist/js/bootstrap";
import NavbarMinor from './NavbarMinor.js'
import Categories from './Categories.js'
import Login from './Login.js'
import Register from './Register.js'
import DetailsPage from './DetailsPage.js';
import book1 from './images/book1.webp'
import book2 from './images/book2.jpg'
import book3 from './images/book3.jpg'
import book4 from './images/book4.jpg'
import book5 from './images/book5.jpg'
import book6 from './images/book6.jpg'
import img1 from './images/img1.webp'
import img2 from './images/img2.jpg'


function App() {
  return (
    <div className="App">
      <Router >
        <Navbar />
        <NavbarMinor />
        <Routes> 

          <Route path="/" element= {<MainContent />}></Route>

          <Route path="/contact" element= {<Contact />}></Route>

          <Route path="/categories" element= {<Categories category=""/>}></Route>
  
          <Route path="/login" element= {<Login />}></Route>

          <Route path="/1984" element= {<DetailsPage title="1984" author="George Orwell" type="Hardback & Paperback" oldPrice = "£15.00" newPrice ="£10.00" image={book1} />}></Route>
          <Route path="/TheGreatGatsby" element= {<DetailsPage title="The Great Gatsby" author="F. Scott. Fitzgerald" type="Paperback Only" oldPrice = "£10.00" newPrice ="£6.50" image={book2}/>}></Route>
          <Route path="/TheLittlePrince" element= {<DetailsPage title="The Little Prince" author="A. D. Saint-Exupery" type="Hardback Only" oldPrice = "£11.00" newPrice ="£8.99" image={book3}/>}></Route>
          <Route path="/ImGladMyMomDied" element= {<DetailsPage title="Im Glad My Mom Died" author="Jennette McCurdy" type="Hardback & Paperback" oldPrice = "£20.00" newPrice ="£15.00" image={book4} />}></Route>
          <Route path="/TheCatcherInTheRye" element= {<DetailsPage title="The Catcher In The Rye" author="J. D. Salinger" type="Hardback & Paperback" oldPrice = "£10.00" newPrice ="£8.00" image={book5} />}></Route>
          <Route path="/AClockworkOrange" element= {<DetailsPage title="A Clockwork Orange" author="Anthony Burgess" type="Hardback Only" oldPrice = "8.00" newPrice ="£4.50" image={book6}/>}></Route>
          <Route path="/Login" element= {<Login/>}></Route>
          <Route path="/Register" element= {<Register/>}></Route>

        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
