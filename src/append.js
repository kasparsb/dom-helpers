import re from './re';
import isArray from './isArray';
import isEmpty from './isEmpty';
import isTextContent from './isTextContent';

/**
 * @param string|DOM node Selector or DOM node
 */
function append(el, childs) {

    // Resolve element
    el = re(el);

    let items = !isArray(childs) ? [childs] : childs;
    for (let i = 0; i < items.length; i++) {
        let item = items[i];
        if (isArray(item)) {
            append(el, item);
        }
        else {
            if (isTextContent(item)) {
                item = document.createTextNode(isEmpty(item) ? '' : item);
            }
            el.appendChild(item);
        }
    }

    return childs
}

export default append