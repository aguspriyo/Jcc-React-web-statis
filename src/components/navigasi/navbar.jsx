import React from "react";
import { Link } from "react-router-dom";
import keranjang from "../../assets/cart.svg";
import jatraf from "../../assets/jatraf white.png";



export default function Navbar() {
  return (
    <header>
      <nav className="navbar navbar-expand-sm navbar-dark bg-secondary text-dark fixed-top" style={{ fontSize: " 18px" }}>
        <div className="container ">
          <img  src={jatraf} style={{ width: "80px", height: "80px" }} alt="" />
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login/Register
                </Link>
              </li>
              <li className="nav-item ">
                <button className="btn btn-secondary" id="cart">
                  <img src={keranjang} style={{ width: "35px" }} alt="gambarCart" to="/keranjang" />
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
