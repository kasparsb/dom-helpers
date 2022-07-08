import re from './re';


/**
 * Return next node after passed node
 */
function next(el) {
    if (!el) {
        return null;
    }

    el = re(el);

    if (!el.nextSibling) {
        return null;
    }

    // Ja next node nav ELEMENT_NODE, tad skip un atgriežam nākošo
    if (el.nextSibling.nodeType !== Node.ELEMENT_NODE) {
        return next(el.nextSibling);
    }

    return el.nextSibling;
}

export default next;