import re from './re';
import isArray from './isArray';
import isEmpty from './isEmpty';
import isTextContent from './isTextContent';

/**
 * @param string|DOM node Selector or DOM node
 */
export default function(parent, childs) {

    // Resolve element
    parent = re(parent);

    let firstNode = parent.hasChildNodes() ? parent.childNodes[0] : null;

    let items = isArray(childs) ? childs : [childs];

    // Liekam backward secībā, lai parentā būt ielikti tādā pašā secībā kā padoti
    for (let i = items.length; i >= 0; i--) {
        let item = items[i];

        if (isArray(item)) {
            prepend(parent, item);
        }
        else {
            if (isTextContent(item)) {
                item = document.createTextNode(isEmpty(item) ? '' : item);
            }

            if (firstNode) {
                firstNode = parent.insertBefore(item, firstNode)
            }
            else {
                firstNode = parent.appendChild(item)
            }
        }

    }

    return childs
}