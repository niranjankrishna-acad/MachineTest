import React from 'react'
import ImageHelper from './helper/ImageHelper'
import { Redirect } from 'react-router-dom'

const Card = ({ product, addToCart = true, removeFromCart = false }) => {

    const isAuthenticated = true

    const checkAddToCart = () => {
        if (isAuthenticated) {
            console.log("Added");
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
                <button className="btn btn-outline-danger btn-block my-2">
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

