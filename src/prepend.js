import re from './re';
import mn from './mn';
import isArray from './isArray';

/**
 * @param string|DOM node Selector or DOM node
 */
export default function(parent, childs) {

    // Resolve element
    parent = re(parent);

    let firstNode = parent.hasChildNodes() ? parent.childNodes[0] : null;

    let items = isArray(childs) ? childs : [childs];

    // Liekam backward secībā, lai parentā būt ielikti tādā pašā secībā kā padoti
    for (let i = items.length-1; i >= 0; i--) {
        if (firstNode) {
            firstNode = parent.insertBefore(mn(items[i]), firstNode)
        }
        else {
            firstNode = parent.appendChild(mn(items[i]))
        }
    }

    return childs
}