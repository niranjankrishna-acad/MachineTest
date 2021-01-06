import React, { useState, useEffect } from 'react'
import { getProducts } from './helper/coreapicalls'

const Home = () => {

    const [products, setProducts] = useState([])
    const [error, setError] = useState(false)

    const loadAllProducts = () => {
        getProducts()
            .then(data => {
                if (data.error) {
                    setError(data.error)
                    console.log(error);
                } else {
                    setProducts(data)
                }
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        loadAllProducts()
    }, [])

    return (
        <div>
            <div className="row">
                {products.map((product, index) => {
                    return (
                        <div key={index}>
                            <h1>{product.name}</h1>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Home
