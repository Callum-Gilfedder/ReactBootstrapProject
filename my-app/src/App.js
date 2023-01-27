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
import DetailsPage from './DetailsPage';

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

          <Route path="/1984" element= {<DetailsPage title="1984" />}></Route>
          <Route path="/TheGreatGatsby" element= {<DetailsPage title="The Great Gatsby" />}></Route>
          <Route path="/TheLittlePrince" element= {<DetailsPage title="The Little Prince" />}></Route>
          <Route path="/ImGladMyMomDied" element= {<DetailsPage title="Im Glad My Mom Died" />}></Route>
          <Route path="/TheCatcherInTheRye" element= {<DetailsPage title="The Catcher In The Rye" />}></Route>
          <Route path="/AClockworkOrange" element= {<DetailsPage title="A Clockwork Orange" />}></Route>


        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
