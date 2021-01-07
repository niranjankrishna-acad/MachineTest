export const addItemToCart = (item, next) => {
    let cart = []
    if (typeof window !== undefined) {
        if (localStorage.getItem("cart")) {
            cart = JSON.parse(localStorage.getItem("cart"))
        }
        cart.push({
            ...item
        })
        localStorage.setItem("cart", JSON.stringify(cart))
        next()
    }
}

export const loadCart = () => {
    if (typeof window !== undefined) {
        if (localStorage.getItem("cart")) {
            return JSON.parse(localStorage.getItem("cart"))
        }
    }
}

export const removeItemFromCart = (productID) => {
    let cart = []
    if (typeof window !== undefined) {
        if (localStorage.getItem("cart")) {
            cart = JSON.parse(localStorage.getItem("cart"))
        }
        cart.map((prod, ind) => {
            if (prod.id === productID) {
                cart.splice(ind, 1)
            }
        })
        localStorage.setItem("cart", JSON.stringify(cart))
    }
    return cart
}

export const emptyCart = next => {
    if (typeof window !== undefined) {
        localStorage.removeItem("cart")
        const cart = []
        localStorage.setItem("cart", JSON.stringify(cart))
        next()
    }
}