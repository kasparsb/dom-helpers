import isEmpty from './isEmpty';
import isTextContent from './isTextContent';

/**
 * Maybe create node if passed element is not node
 * Text is translated to textNode
 * If passed element is node, then return it
 */
export default function(el) {
    if (isTextContent(el)) {
        el = document.createTextNode(isEmpty(el) ? '' : el);
    }

    return el;
}