import isArray from './isArray';
import re from './re';

/**
 * @param string|DOM node Selector or DOM node
 */
function append(el, childs) {

    // Resolve element
    el = re(el);

    if (!isArray(childs)) {
        childs = [childs];
    }

    for (let child of childs) {

        if (isArray(child)) {
            append(el, child);
        }
        else if (
            typeof child === 'string'
            || typeof child === 'number'
            || child === null
        ) {
            el.appendChild(document.createTextNode(child === null ? '' : child));
        }
        else {
            el.appendChild(child);
        }
    }
    return el
}

export default append