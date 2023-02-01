import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        // <!-- NAVBAR MINOR  -->
        <ul class="nav  navbar-light bg-body-secondary">

        <Link to={"/categories/NewIn"} style={{textDecoration: "none", color: "black" }}>
        <li class="nav-item">
            <a class="nav-link" href="#">NEW IN</a>
        </li>
        </Link>

        <div class="vr"></div>

        <Link to={"/categories/BestSellers"} style={{textDecoration: "none", color: "black" }}>
        <li class="nav-item">
            <a class="nav-link" href="#">BEST SELLERS</a>
        </li>
        </Link>

        <div class="vr"></div>

        <Link to={"/categories/PreOrders"} style={{textDecoration: "none", color: "black" }}>
        <li class="nav-item">
            <a class="nav-link">PRE-ORDER HARDBACKS</a>
        </li>
        </Link>

        <div class="vr"></div>

        <Link to={"/categories/SpecialEditions"} style={{textDecoration: "none", color: "black" }}>
        <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#">SPECIAL EDITIONS</a>
        </li>
        </Link>

        <div class="vr"></div>

        <Link to={"/categories/Fiction"} style={{textDecoration: "none", color: "black" }}>
        <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#">FICTION</a>
        </li>
        </Link>

        <div class="vr"></div>

        <Link to={"/categories/Non-Fiction"} style={{textDecoration: "none", color: "black" }}>
        <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#">NON-FICTION</a>
        </li>
        </Link>
        <div class="vr"></div>


        <Link to={"/categories/Biographies"} style={{textDecoration: "none", color: "black" }}>
        <li class="nav-item">
            <a class="nav-link " aria-current="page" href="#">BIOGRAPHIES</a>
        </li>
        </Link>

        <div class="vr"></div>

        <Link to={"/categories/History"} style={{textDecoration: "none", color: "black" }}>
        <li class="nav-item">
            <a class="nav-link " aria-current="page" href="#">HISTORY</a>
        </li>
        </Link>

        <div class="vr"></div>
        <Link to={"/categories/PopularScience"} style={{textDecoration: "none", color: "black" }}>
        <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#">POPULAR SCIENCE</a>
        </li>
        </Link>

        <div class="vr"></div>

        </ul>


    )
}