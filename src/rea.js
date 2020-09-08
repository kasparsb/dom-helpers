import qa from './qa';

/**
 * Resolve dom element.
 * First check if el is string representing selector, then
 * find element matching selector using document.querySelector function
 * Otherwise return el
 */
function rea(els) {

    if (typeof els === 'string') {
        return qa(els);
    }

    return els;
}

export default rea