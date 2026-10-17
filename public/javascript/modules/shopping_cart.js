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
        // TODO CHECK IF ID WITH SIZE IS ALREADY IN SHOPPING CART?
        let itemInCart = false;
        let index = 0;
        for (let item of this.items['shoppingCart']) {
            item = JSON.parse(item);
            if (
                item['id'] === product['id'] &&
                item['size'] === product['size']
            ) {
                itemInCart = true;
                item['amount'] = item['amount'] += product['amount'];
                this.items['shoppingCart'][index] = JSON.stringify(item);
                this.updateLocalStorage();
            }
        }
        if (!itemInCart) {
            this.items['shoppingCart'].push(JSON.stringify(product));
            this.updateLocalStorage();
        }
    }

    remove(product, amountToDelete) {
        let index = 0;
        for (let item of this.items['shoppingCart']) {
            item = JSON.parse(item);
            if (
                item['id'] === product['id'] &&
                item['size'] === product['size']
            ) {
                if (amountToDelete < item['amount']) {
                    item['amount'] = item['amount'] - amountToDelete;
                    this.items['shoppingCart'][index] = JSON.stringify(item);
                    this.updateLocalStorage();
                } else {
                    this.items['shoppingCart'].splice(index, 1);
                }

                console.log(this.items['shoppingCart']);
                this.updateLocalStorage();
            }
            index++;
        }
    }

    updateLocalStorage() {
        window.localStorage.setItem('cart', JSON.stringify(this.items));
    }
}
