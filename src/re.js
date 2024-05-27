import q from './q';
import reProxy from './reProxy';

/**
 * Resolve dom element.
 * First check if el is string representing selector, then
 * find element matching selector using document.querySelector function
 * Otherwise return el
 */
export default function(el) {

    if (typeof el === 'string') {
        return q(el);
    }

    return reProxy(el);
}