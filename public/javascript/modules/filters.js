export default class Filters {
    constructor() {}

    /**
     * Sorts an array of products
     * @param {Array} products - Array of products.
     * * @param {string} sortMethod - The method of sorting.
     * @returns {Array} A sorted products array
     */
    sortProducts(products, sortMethod) {
        switch (sortMethod) {
            case 'sortOldNew':
                products.sort(function (a, b) {
                    return a.id - b.id;
                });
                break;
            case 'sortNewOld':
                products.sort(function (a, b) {
                    return a.id - b.id;
                });
                products.reverse();
                break;
            case 'sortPriceLowHigh':
                products.sort(function (a, b) {
                    return a.product_price - b.product_price;
                });
                break;
            case 'sortPriceHighLow':
                products.sort(function (a, b) {
                    return a.product_price - b.product_price;
                });
                products.reverse();
                break;
            case 'sortNameAZ':
                products.sort((a, b) =>
                    a.product_name.localeCompare(b.product_name),
                );
                break;
            case 'sortNameZA':
                products.sort((a, b) =>
                    a.product_name.localeCompare(b.product_name),
                );
                products.reverse();
                break;
        }
        return products;
    }
}
