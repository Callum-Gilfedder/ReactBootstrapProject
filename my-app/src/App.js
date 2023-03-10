import logo from "./logo.svg";
import Navbar from "./Navbar.js";
import Footer from "./Footer.js";
import MainContent from "./MainContent.js";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Contact from "./Contact.js";
import "bootstrap/dist/js/bootstrap";
import NavbarMinor from "./NavbarMinor.js";
import Categories from "./Categories.js";
import Login from "./Login.js";
import Register from "./Register.js";
import DetailsPage from "./DetailsPage.js";
import book1 from "./images/book1.webp";
import book2 from "./images/book2.jpg";
import book3 from "./images/book3.jpg";
import book4 from "./images/book4.jpg";
import book5 from "./images/book5.jpg";
import book6 from "./images/book6.jpg";
import img1 from "./images/img1.webp";
import img2 from "./images/img2.webp";
import img3 from "./images/img3.jpg";
import ExploreCategory from "./ExploreCategory";
import ScrollToTop from "./ScrollToTop";
import { useState, useContext, createContext } from "react";
import OffCanvas from "./OffCanvas";
import { MyContext } from "./Contexts/Context.js";
import NotFound404 from "./NotFound404";

function App() {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);
  const [count5, setCount5] = useState(0);
  const [count6, setCount6] = useState(0);
  const [newPrice1, setNewPrice1] = useState(10.0);
  const [newPrice2, setNewPrice2] = useState(6.5);
  const [newPrice3, setNewPrice3] = useState(8.99);
  const [newPrice4, setNewPrice4] = useState(15.0);
  const [newPrice5, setNewPrice5] = useState(8.0);
  const [newPrice6, setNewPrice6] = useState(4.5);

  return (
    <div className="App">
      <MyContext.Provider
        value={{
          count,
          setCount,
          count1,
          count2,
          count3,
          count4,
          count5,
          count6,
          setCount1,
          setCount2,
          setCount3,
          setCount4,
          setCount5,
          setCount6,
          newPrice1,
          newPrice2,
          newPrice3,
          newPrice4,
          newPrice5,
          newPrice6,
        }}
      >
        <Router>
          {/* ScrollToTop is from React docs */}
          <ScrollToTop />
          <Navbar />
          <NavbarMinor />
          <Routes>
            {/* Pages that haven't been created */}
            <Route path="/404-not-found" element={<NotFound404 />}></Route>

            {/* Home */}
            <Route
              path="/"
              element={<MainContent setCount={setCount} count={count} />}
            ></Route>

            {/* Individual book details */}
            <Route
              path="/1984"
              element={
                <DetailsPage
                  title="1984"
                  author="George Orwell"
                  type="Hardback & Paperback"
                  oldPrice="??15.00"
                  newPrice="??10.00"
                  image={book1}
                  setCount={setCount}
                  count={count}
                />
              }
            ></Route>
            <Route
              path="/TheGreatGatsby"
              element={
                <DetailsPage
                  title="The Great Gatsby"
                  author="F. Scott. Fitzgerald"
                  type="Paperback Only"
                  oldPrice="??10.00"
                  newPrice="??6.50"
                  image={book2}
                  setCount={setCount}
                  count={count}
                />
              }
            ></Route>
            <Route
              path="/TheLittlePrince"
              element={
                <DetailsPage
                  title="The Little Prince"
                  author="A. D. Saint-Exupery"
                  type="Hardback Only"
                  oldPrice="??11.00"
                  newPrice="??8.99"
                  image={book3}
                  setCount={setCount}
                  count={count}
                />
              }
            ></Route>
            <Route
              path="/ImGladMyMomDied"
              element={
                <DetailsPage
                  title="Im Glad My Mom Died"
                  author="Jennette McCurdy"
                  type="Hardback & Paperback"
                  oldPrice="??20.00"
                  newPrice="??15.00"
                  image={book4}
                  setCount={setCount}
                  count={count}
                />
              }
            ></Route>
            <Route
              path="/TheCatcherInTheRye"
              element={
                <DetailsPage
                  title="The Catcher In The Rye"
                  author="J. D. Salinger"
                  type="Hardback & Paperback"
                  oldPrice="??10.00"
                  newPrice="??8.00"
                  image={book5}
                  setCount={setCount}
                  count={count}
                />
              }
            ></Route>
            <Route
              path="/AClockworkOrange"
              element={
                <DetailsPage
                  title="A Clockwork Orange"
                  author="Anthony Burgess"
                  type="Hardback Only"
                  oldPrice="8.00"
                  newPrice="??4.50"
                  image={book6}
                  setCount={setCount}
                  count={count}
                />
              }
            ></Route>

            {/* Contact, Login and Registration */}
            <Route path="/Contact" element={<Contact />}></Route>
            <Route path="/Login" element={<Login />}></Route>
            <Route path="/Register" element={<Register />}></Route>

            {/* Categories */}
            <Route
              path="/categories"
              element={<Categories category="" />}
            ></Route>
            <Route
              path="/categories/Crime"
              element={<ExploreCategory category="Crime"></ExploreCategory>}
            ></Route>
            <Route
              path="/categories/Classics"
              element={<ExploreCategory category="Classics"></ExploreCategory>}
            ></Route>
            <Route
              path="/categories/ScienceFiction"
              element={
                <ExploreCategory category="Science Fiction"></ExploreCategory>
              }
            ></Route>
            <Route
              path="/categories/Fantasy"
              element={<ExploreCategory category="Fantasy"></ExploreCategory>}
            ></Route>
            <Route
              path="/categories/Fiction"
              element={<ExploreCategory category="Fiction"></ExploreCategory>}
            ></Route>
            <Route
              path="/categories/Non-Fiction"
              element={
                <ExploreCategory category="Non-Fiction"></ExploreCategory>
              }
            ></Route>
            <Route
              path="/categories/Geography"
              element={<ExploreCategory category="Geography"></ExploreCategory>}
            ></Route>
            <Route
              path="/categories/History"
              element={<ExploreCategory category="History"></ExploreCategory>}
            ></Route>
            <Route
              path="/categories/PopularScience"
              element={
                <ExploreCategory category="Popular Science"></ExploreCategory>
              }
            ></Route>
            <Route
              path="/categories/NewIn"
              element={<ExploreCategory category="New In"></ExploreCategory>}
            ></Route>
            <Route
              path="/categories/BestSellers"
              element={
                <ExploreCategory category="Best Sellers"></ExploreCategory>
              }
            ></Route>
            <Route
              path="/categories/PreOrders"
              element={
                <ExploreCategory category="Pre-orders"></ExploreCategory>
              }
            ></Route>
            <Route
              path="/categories/SpecialEditions"
              element={
                <ExploreCategory category="Special Editions"></ExploreCategory>
              }
            ></Route>
            <Route
              path="/categories/Biographies"
              element={
                <ExploreCategory category="Biographies"></ExploreCategory>
              }
            ></Route>
          </Routes>
          <OffCanvas count={count} setCount={setCount} />
          <Footer />
        </Router>
      </MyContext.Provider>
    </div>
  );
}

export default App;
