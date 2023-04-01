import React from "react";
import { Col, Image } from "react-bootstrap";
import "./Product.css";

const Product = ({ product, addToCartHandler }) => {
  // Destructure Product Data

  const { name, img, price } = product;

  return (
    <Col md="6" lg="4">
      <div className="product-card position-relative">
        <div className="product-card-img">
          <Image className="img-fluid" src={img}></Image>
        </div>
        <div className="product-card-content">
          <h4>{name}</h4>
          <p> Price : ₹{price}</p>
          <div className="cart-btn">
            <button onClick={()=> addToCartHandler(product)}>Add To Cart</button>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default Product;
