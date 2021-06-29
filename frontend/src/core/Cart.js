import React, { useState, useEffect } from "react";
import Base from "./Base";

import Card from "./Card";
import { loadCart } from "./helper/CartHelper";
import PaymentB from "./PaymentB";



const Cart = () => {
  const [reload, setReload] = useState(false);
  const [products, setProducts] = useState([]);



  useEffect(() => {
    setProducts(loadCart());
  }, [reload]);



  const loadAllProducts = (products) => {
    return (
      <div>
        {products.map((product, index) => (
          <Card
            key={index}
            product={product}
            removeFromCart={true}
            addtoCart={false}
            reload={reload}
            setReload={setReload}
          />
        ))}
      </div>
    );
  };




  return (
    <Base title="Your Cart" description="">
      <div className="row text-center">
        <div className="col-4">
          {products.length > 0 ? (loadAllProducts(products)) : (
            <h4>No products</h4>
          )}
        </div>
        <div className="col-5 ml-auto">
          {products.length > 0
            ? (
              <PaymentB products={products} setReload={setReload} />
            )
            : (
              <h3>Please login or add something in cart</h3>
            )}
        </div>
      </div>
    </Base>
  );
};

export default Cart;
