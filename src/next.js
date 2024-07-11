import re from './re';


/**
 * Return next node after passed node
 */
function next(el) {
    if (!el) {
        return null;
    }

    el = re(el);

    if (!el.nextElementSibling) {
        return null;
    }

    // Ja next node nav ELEMENT_NODE, tad skip un atgriežam nākošo
    if (el.nextElementSibling.nodeType !== Node.ELEMENT_NODE) {
        return next(el.nextElementSibling);
    }

    return el.nextElementSibling;
}

export default next;