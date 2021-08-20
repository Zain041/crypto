import React from "react";
import rooster from "../assets/png/rooster1.png";
// import { Link } from "react-router-dom";
import "./navbar.css";
const Navbar = () => {
  const [display, setDisplay] = React.useState(false);

  return (
    <>
      <nav>
        <input checked={display} id="nav-toggle" type="checkbox" />
        <div class="logo">
          Huli <strong style={{ color: "green" }}> Huli</strong>
        </div>
        <ul class="links" onClick={() => setDisplay(false)}>
          <li>
            <a href="#buy">How to buy</a>
          </li>
          <li>
            <a href="#tokenomics">Tokenomics</a>
          </li>
          <li>
            <a href="#swap">Swap</a>
          </li>
          <li>
            <a href="#roadmap">Road Map</a>
          </li>
          <li>
            <a href="#community">Community</a>
          </li>
        </ul>
        <label
          for="nav-toggle"
          class="icon-burger"
          onClick={display ? () => setDisplay(false) : () => setDisplay(true)}
        >
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
        </label>
      </nav>
    </>
  );
};

export default Navbar;
