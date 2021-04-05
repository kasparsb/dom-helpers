import re from './re';
import parent from './parent';
import isArray from './isArray';
import isEmpty from './isEmpty';
import isTextContent from './isTextContent';

/**
 * @param string|DOM node Selector or DOM node
 */
export default function(el, nodes) {

    // Resolve element
    el = re(el);

    let parentEl = parent(el);

    let items = isArray(nodes) ? nodes : [nodes];
    let r = [];

    // Liekam backward secībā, lai būt ielikti tādā pašā secībā kā padoti
    for (let i = items.length - 1; i >= 0; i--) {
        let item = items[i];

        if (isTextContent(item)) {
            item = document.createTextNode(isEmpty(item) ? '' : item);
        }

        el = parentEl.insertBefore(item, el)

        r.unshift(el);
    }

    return r
}