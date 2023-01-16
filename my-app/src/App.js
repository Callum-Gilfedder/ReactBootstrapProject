import logo from './logo.svg';
import Navbar from './Navbar.js' 
import Footer from './Footer.js'
import MainContent from './MainContent.js'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from './Contact.js'

function App() {
  return (
    <div className="App">
      <Router >
        <Navbar />
        <Routes> 

          <Route path="/" element= {<MainContent />}></Route>

          <Route path="/contact" element= {<Contact />}> </Route>


        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
