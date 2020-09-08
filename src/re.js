import q from './q';

/**
 * Resolve dom element.
 * First check if el is string representing selector, then
 * find element matching selector using document.querySelector function
 * Otherwise return el
 */
function re(el) {

    if (typeof el === 'string') {
        return q(el);
    }

    return el;
}

export default re