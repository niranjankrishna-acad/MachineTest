import React, { useState } from 'react'
import ImageHelper from './helper/ImageHelper'
import { Redirect } from 'react-router-dom'
import { addItemToCart, removeItemFromCart } from './helper/CartHelper'
import { isAuthenticated } from '../auth/helper'



const Card = ({ product, addToCart = true, removeFromCart = true }) => {

    const [redirect, setRedirect] = useState(false)

    const checkAddToCart = () => {
        if (isAuthenticated()) {
            console.log("Added");
            addItemToCart(product, setRedirect(true));
        } else {
            console.log("Login please");
        }
    }

    const getRedirect = redirect => {
        if (redirect) {
            return <Redirect to="/cart" />
        } else {

        }
    }

    const showAddToCart = addToCart => {
        return (
            addToCart && (
                <button className="btn btn-outline-success btn-block my-2" onClick={checkAddToCart}>
                    Add to Cart
                </button>
            )
        )
    }

    const showRemoveFromCart = removeFromCart => {
        return (
            removeFromCart && (
                <button className="btn btn-outline-danger btn-block my-2" onClick={() => { removeItemFromCart(product.id) }}>
                    Remove from Cart
                </button>
            )
        )
    }

    return (
        <div className="card text-white bg-dark border border-info">
            <div className="card-header lead">
                {product.name || "Product"}
            </div>
            <div className="card-body">
                <ImageHelper product={product} />

                <p className="lead bg-info font-weight-normal p-2 mt-3">
                    {product.description || "Product"}
                </p>

                <p className="btn btn-warning rounded  btn-sm px-4">{`Rs ${product.price}`}</p>

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
    )
}

export default Card

