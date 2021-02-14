import isArray from './isArray';
import re from './re';
import isEmpty from './isEmpty';

/**
 * @param string|DOM node Selector or DOM node
 */
function append(el, childs) {

    // Resolve element
    el = re(el);

    let items = !isArray(childs) ? [childs] : childs;
    for (let item of items) {

        if (isArray(item)) {
            append(el, item);
        }
        else if (
            typeof item === 'string'
            || typeof item === 'number'
            || typeof item === 'undefined'
            || item === null
        ) {
            el.appendChild(document.createTextNode(isEmpty(item) ? '' : item));
        }
        else {
            el.appendChild(item);
        }
    }

    return childs
}

export default append