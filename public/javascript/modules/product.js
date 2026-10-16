'use strict';

export default class Product {
    constructor(id, productName, description, size, amount, price) {
        this.id = id;
        this.productName = productName;
        this.description = description;
        this.size = size;
        this.amount = amount;
        this.price = price;
    }
    toJSON() {
        return {
            id: this.id,
            productName: this.productName,
            description: this.description,
            size: this.size,
            amount: this.amount,
            price: this.price,
        };
    }
}
