import React from 'react'

const ImageHelper = ({ product }) => {
    const imageURL = product ? product.image : `https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/04/10/16/online-clothes-shops-hero.jpg`

    return (
        <div className="rounded border  border-success p-2">
            <img src={imageURL} style={{ maxHeight: "100%", maxWidth: "100%" }} className="rounded" alt="image" />
        </div>
    )
}

export default ImageHelper
