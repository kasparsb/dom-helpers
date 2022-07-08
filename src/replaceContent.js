import q from './q';
import append from './append';

/**
 * replace element childs with new dom element
 * Signatures
 * replaceContent(domNode, selector, newContent)
 * replaceContent(domNode, newContent)
 * replaceContent(selector, newContent)
 */
export default function(a1, a2, a3) {

    let el, newContent;

    // First element is querySelector
    if (typeof a1 === 'string') {
        newContent = a2;

        el = q(document, a1);
    }
    // First element is domNode
    else {
        // Second is string and third argument is defined
        if (typeof a2 === 'string' && typeof a3 != 'undefined') {
            newContent = a3;

            el = q(a1, a2);
        }
        // Second argument is newContent
        else {
            el = a1;
            newContent = a2;
        }
    }

    if (!el) {
        return newContent;
    }

    el.innerHTML = '';
    return append(el, newContent);
}