import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import swal from 'sweetalert';
import Header from "../../Header/Header";
import Cart from "../Cart/Cart";
import Product from "./Product/Product";
import "./Shop.css";

const Shop = () => {
  // Products State
  const [products, setProducts] = useState([]);

  // Load Data using useEffect

  useEffect(() => {
    fetch(`products.json`)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error(error));
  }, []);

  // Cart State
  const [cart, setCart] = useState([]);

  const addToCartHandler = (productData) => {
    swal("Added!", "Your product added to cart", "success")
    setCart([...cart, { ...productData, quantity: 1 }]);
  };

  // Cart Page Swap State
  const [showCart, setShowCart] = useState(false);

  const handleShow = (value)=>{
    setShowCart(value)
  }

  return (
    <>
      <Header count={cart.length} handleShow={handleShow}></Header>
      <section id="Shop">
        <div className="shop-wrapper">
          {showCart ? (
            <Cart cart={cart}></Cart>
          ) : (
            <Container>
              <div className="shop-title text-center">
                <h2>Shop from here</h2>
              </div>
              <Row>
                {products.map((product) => (
                  <Product
                    key={product.id}
                    product={product}
                    addToCartHandler={addToCartHandler}
                  ></Product>
                ))}
              </Row>
            </Container>
          )}
        </div>
      </section>
    </>
  );
};

export default Shop;
