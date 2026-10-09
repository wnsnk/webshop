/**
 * Creates an element with classes
 * @param {string} element - The name of the element (for example div or btn).
 * * @param {string} classes - All the classes you want to ad to the element (for example 'btn btn-primary').
 */
export function createElementWithClass(element, classes) {
    const el = document.createElement(element);
    el.className = classes;
    return el;
}
