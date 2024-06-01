import re from './re';
import isArrayLike from './isArrayLike';
import isEmpty from './isEmpty';
import isTextContent from './isTextContent';
import pe from './pe';

/**
 * @param string|DOM node Selector or DOM node
 */
function append(el, childs) {

    // Resolve element
    el = re(el);

    /**
     * Array vai NodeList
     *
     * form elementam ir .length
     * Tāpēc, ja skatās pēc iterator, tad form būs kā array
     */
    let items = isArrayLike(childs) ? childs : [childs];
    for (let i = 0; i < items.length; i++) {

        let item = pe(items[i]);

        if (isArrayLike(item)) {
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