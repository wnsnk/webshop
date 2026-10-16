'use strict';
import Product from './product.js';

export default class ShoppingCart {
    constructor() {
        if (!window.localStorage.getItem('cart')) {
            const emptyCart = { shoppingCart: [] };
            window.localStorage.setItem('cart', JSON.stringify(emptyCart));
        }
        this.items = JSON.parse(window.localStorage.getItem('cart'));
    }
    /**
     * adds product to shopping cart
     * @param {Product} product - The product that needs to be added.
     */
    add(product) {
        this.items['shoppingCart'].push(JSON.stringify(product));
        window.localStorage.setItem('cart', JSON.stringify(this.items));
    }

    remove(product) {}

    updateLocalStorage() {}
}
