import matchesMethodName from './other/matchesMethodName';
import re from './re';

/**
 * Return next node after passed node
 */
function next(el, querySelectorMatch) {
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

    // Ja ir padots querySelector kuram ir jāatbilst atrastajai next nodei
    if (querySelectorMatch && el.nextElementSibling[matchesMethodName]) {
        if (!el.nextElementSibling[matchesMethodName](querySelectorMatch)) {
            return next(el.nextElementSibling, querySelectorMatch);
        }
    }

    return el.nextElementSibling;
}

export default next;