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
            /**
             * @todo Te kaut kas nav pareizi
             */
            append(el, child);
        }
        else if (typeof child === 'string') {
            el.appendChild(document.createTextNode(child));
        }
        else if (typeof child === 'number') {
            el.appendChild(document.createTextNode(child));
        }
        else if (child === null) {
            el.appendChild(document.createTextNode(''));
        }
        else {
            el.appendChild(child);
        }
    }
    return el
}

export default append