import React, { useState } from "react";
import ImageHelper from "./helper/ImageHelper";
import { Redirect } from "react-router-dom";
import { addItemToCart, removeItemFromCart } from "./helper/CartHelper";
import { isAuthenticated } from "../auth/helper";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Card = ({
  product,
  addtoCart = true,
  removeFromCart = false,
  reload = undefined,
  setReload = (f) => f
}) => {

  const [redirect, setRedirect] = useState(false);

  const cartTitle = product ? product.name : "Product Name";
  const cartDescription = product ? product.description : "Product description";
  const cartPrice = product ? product.price : "Price yet to be decided";



  const addToCart = () => {
    if (isAuthenticated()) {
      addItemToCart(product, () => setRedirect(true));
      // console.log("Added to cart");
    } else {
      // console.log("Login Please!");
      toast.error('Login Please!', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };



  const getAredirect = (redirect) => {
    if (redirect) {
      return <Redirect to="/cart" />;
    }
  };



  const showAddToCart = (addToCart) => {
    return (
      addtoCart && (
        <button
          onClick={addToCart}
          className="btn btn-block btn-outline-success mt-2 mb-2"
        >
          Add to Cart
        </button>
      )
    );
  };



  const showRemoveFromCart = (removeFromCart) => {
    return (
      removeFromCart && (
        <button
          onClick={() => {
            removeItemFromCart(product.id);
            setReload(!reload);

            console.log("Product removed from cart");
          }}
          className="btn btn-block btn-outline-danger mt-2 mb-2"
        >
          Remove from cart
        </button>
      )
    );
  };



  return (
    <div className="card text-white bg-dark border-light mt-5">
      <div className="card-body">
        {getAredirect(redirect)}
        <ImageHelper product={product} />
        <h4 className="card-header text-center bg-info">{cartTitle}</h4>
        <p className="lead text-center font-weight-normal text-wrap pt-3">
          {cartDescription}
        </p>
        <div className="text-center">
          <p className="btn btn-warning rounded  btn-sm px-4">₹ {cartPrice}</p>
        </div>
        <div className="row">
          <div className="col-12">
            {showAddToCart(addToCart)}
          </div>
          <div className="col-12">
            {showRemoveFromCart(removeFromCart)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
