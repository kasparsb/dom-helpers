import matchesMethodName from './other/matchesMethodName';
import re from './re';

/**
 * Return prev node before passed node
 */
function prev(el, querySelectorMatch) {
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

    // Ja ir padots querySelector kuram ir jāatbilst atrastajai next nodei
    if (querySelectorMatch && el.previousElementSibling[matchesMethodName]) {
        if (!el.previousElementSibling[matchesMethodName](querySelectorMatch)) {
            return prev(el.previousElementSibling, querySelectorMatch);
        }
    }

    return el.previousElementSibling;
}

export default prev;