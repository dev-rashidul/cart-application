import React, { useEffect, useState } from "react";
import { Container, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import "./Cart.css";

const Cart = ({ cart }) => {
  // Updated Cart State

  const [uCart, setUcart] = useState([]);

  useEffect(() => {
    setUcart(cart);
  }, [cart]);

  const deleteHandler = (id) => {
    const newCart = uCart.filter((dCart) => id !== dCart.id);
    alert("are you want to delete?");
    swal("Deleted!", "Your imaginary file has been deleted!", "error");
    setUcart(newCart);
  };

  return (
    <div>
      <div className="cart-title text-center pt-5">
        <h2>Your Products</h2>
      </div>
      {uCart.map((cartItem, i) => {
        return (
          <>
            <Container>
              <div className="single-cart pt-5">
                <div className="d-md-flex justify-content-between align-items-center">
                  <div className="cart-left d-flex align-items-center">
                    <Image className="img-fluid" src={cartItem.img}></Image>
                    <div className="ps-3">
                      <h4>{cartItem.name}</h4>
                      <p>Price : ₹{cartItem.price * cartItem.quantity}</p>
                    </div>
                  </div>
                  <div className="cart-right d-flex align-items-center">
                    <div className="d-flex align-items-center">
                      <button
                        onClick={() => {
                          const _uCart = uCart.map((item, index) => {
                            return i === index
                              ? {
                                  ...item,
                                  quantity:
                                    item.quantity > 0 ? item.quantity - 1 : 0,
                                }
                              : item;
                          });
                          setUcart(_uCart);
                        }}
                      >
                        -
                      </button>
                      <p>{cartItem.quantity}</p>
                      <button
                        onClick={() => {
                          const _uCart = uCart.map((item, index) => {
                            return i === index
                              ? { ...item, quantity: item.quantity + 1 }
                              : item;
                          });
                          setUcart(_uCart);
                        }}
                      >
                        +
                      </button>
                    </div>
                    <button
                      className="delete-btn"
                      onClick={() => deleteHandler(cartItem.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </Container>
          </>
        );
      })}
      <Container>
        <div className="total-price text-center">
          <p>
            Total Price :
            <span>
              {" "}
              ₹
              {uCart
                .map((item) => item.price * item.quantity)
                .reduce((total, value) => total + value, 0)}
            </span>
          </p>
          <div className="order-place-btn mt-4">
            <Link to="/order">Place Order</Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Cart;
