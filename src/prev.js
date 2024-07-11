import re from './re';


/**
 * Return prev node before passed node
 */
function prev(el) {
    if (!el) {
        return null;
    }

    el = re(el);

    if (!el.previousElementSibling) {
        return null;
    }

    // Ja next node nav ELEMENT_NODE, tad skip un atgriežam nākošo
    if (el.previousElementSibling.nodeType !== Node.ELEMENT_NODE) {
        return prev(el.previousElementSibling);
    }

    return el.previousElementSibling;
}

export default prev;