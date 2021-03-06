import re from './re';
import mn from './mn';
import parent from './parent';
import isArray from './isArray';

/**
 * @param string|DOM node Selector or DOM node
 */
export default function(el, nodes) {

    // Resolve element
    el = re(el);

    let parentEl = parent(el);

    let items = isArray(nodes) ? nodes : [nodes];

    // Liekam backward secībā, lai būt ielikti tādā pašā secībā kā padoti
    for (let i = items.length-1; i >= 0; i--) {
        el = parentEl.insertBefore(mn(items[i]), el)
    }

    return nodes
}