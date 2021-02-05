import matchesMethodName from './other/matchesMethodName';

/**
 * Find elements parent node matching querySelector
 * or return el if it matches querySelector
 */
export default function(el, querySelector) {
    // Also check if elements has "method" matches. nodeType=9 (Node.DOCUMENT_NODE) does not have matches method
    while (el && el[matchesMethodName]) {

        if (el[matchesMethodName](querySelector)) {
            return el;
        }

        el = el.parentNode;
    }

    return null;
}