import re from './re';
import isPromise from './isPromise';
import htmlToDomEl from './htmlToDomEl';

function _replace(oldEl, newEl) {
    oldEl.parentNode.replaceChild(
        // ja string, tad parsējam par Node
        typeof newEl === 'string' ? htmlToDomEl(newEl) : newEl,
        oldEl
    );
}

/**
 * Replace element with new element
 * New element can be dom node or html
 */
export default function(el, newEl) {
    el = re(el);

    if (el && el.parentNode && newEl) {
        if (isPromise(newEl)) {
            newEl.then(newHtml => _replace(el, newHtml))
        }
        else {
            _replace(el, newEl)
        }
    }

    // Vienmēr atgriežam jauno el, ja arī padotais el non existing
    return newEl;
}