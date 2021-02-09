import matchesMethodName from './other/matchesMethodName';
import re from './re';

/**
 * Find elements parent node matching querySelector
 * or return el if it matches querySelector
 *
 * @param stopQuerySelecot querySelector at which to stop looking for parent. Use full
 * whene you know your most parent
 */
export default function(el, querySelector, stopQuerySelecot) {
    el = re(el);

    // If no query selector, than return direct parent
    if (!querySelector) {
        return el.parentNode;
    }

    // Also check if elements has "method" matches. nodeType=9 (Node.DOCUMENT_NODE) does not have matches method
    while (el && el[matchesMethodName]) {

        if (el[matchesMethodName](querySelector)) {
            return el;
        }

        // Check for stop query selector
        if (stopQuerySelecot && el[matchesMethodName](stopQuerySelecot)) {
            return null;
        }

        el = el.parentNode;
    }

    return null;
}