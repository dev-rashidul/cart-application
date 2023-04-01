import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = ({ count, handleShow }) => {
  return (
    <header id="Header">
      <div className="header-wrapper">
        <Container>
          <nav className="d-flex justify-content-between align-items-center">
            <div className="logo">
              <Link onClick={() => handleShow(false)}>eShop</Link>
            </div>
            <div className="header-menu">
              <ul className="d-flex">
                <li>
                  <Link onClick={() => handleShow(false)}>Shop</Link>
                </li>
                <li>
                  <Link onClick={() => handleShow(true)}>
                    Cart <sup>{count}</sup>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </Container>
      </div>
    </header>
  );
};

export default Header;
