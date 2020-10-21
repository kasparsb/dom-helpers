/**
 * Find elements parent node matching querySelector
 * or return el if it matches querySelector
 */
export default function(el, querySelector) {
    while (el) {

        if (el.matches(querySelector)) {
            return el;
        }

        el = el.parentNode;
    }

    return null;
}