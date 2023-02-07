


export const baseurl = 'https://api.mercadolibre.com'


export async function fetchProducts(query) {
    const url = `${baseurl}/sites/MLB/search?q=${query}`;
    const res = await fetch(url);
    const data = await res.json();

    return data.results.slice(0, 20)
}

export async function fetchDetails(id) {
    const url = `${baseurl}/items/${id}`;
    const res = await fetch(url);
    const data = await res.json();
    return data
}


export function addProduct(product) {
    const prevItems = localStorage.getItem('cart')
    if (prevItems) {
        const items = JSON.parse(prevItems)
        items.push(product)
        localStorage.setItem('cart', JSON.stringify(items))
    } else {
        const items = [product]
        localStorage.setItem('cart', JSON.stringify(items))
    }
}

export function getCartItems() {
    const cartitems = localStorage.getItem('cart')
    if (cartitems) {
        const citems = JSON.parse(cartitems)
        return citems
    } else {
        return []
    }
}

export function sumPrices(products) {
    let result = 0
    for (let i = 0; i < products.length; i++) {
        result = result + products[i].price
    } return result
}

export function removeCard(id) {
    const itemsincart = localStorage.getItem('cart')
    const cartitem = JSON.parse(itemsincart)
    const newcart = []
    let isremoved = false
    for (let i = 0; cartitem.length > i; i++) {
        if (cartitem[i].id != id || isremoved) {
            newcart.push(cartitem[i])
        } else{
            isremoved=true
        }
    }
localStorage.setItem('cart', JSON.stringify(newcart))
window.location.reload()
}
