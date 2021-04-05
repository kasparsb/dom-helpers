import re from './re';
import mn from './mn';
import parent from './parent';
import next from './next';
import append from './append';
import isArray from './isArray';

/**
 * @param string|DOM node Selector or DOM node
 */
export default function(el, nodes) {

    // Resolve element
    el = re(el);

    let parentEl = parent(el);

    let items = isArray(nodes) ? nodes : [nodes];

    let nextEl = next(el);

    for (let i = items.length-1; i >= 0; i--) {

        // Atrodam nākošo node, lai varētu uztaisīt insertBefore
        if (nextEl) {
            el = parentEl.insertBefore(mn(items[i]), nextEl)
        }
        else {
            el = append(parentEl, mn(items[i]));
        }
    }

    return nodes
}