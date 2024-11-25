import re from './re';
import isPromise from './isPromise';
import htmlToDomEl from './htmlToDomEl';

function _replace(oldEl, newEl) {
    if (typeof newEl === 'string') {
        // ja string, tad parsējam par Node
        newEl = htmlToDomEl(newEl)
    }

    oldEl.parentNode.replaceChild(newEl, oldEl);

    return newEl;
}

/**
 * Replace element with new element
 * New element can be dom node or html
 */
export default function(el, newEl) {
    el = re(el);

    if (el && el.parentNode && newEl) {
        if (isPromise(newEl)) {
            // Promise gadījumā atgriežam arī promise
            return new Promise((resolve, reject) => {
                newEl.then(newHtml => {
                    resolve(_replace(el, newHtml))
                })
            })
        }
        else {
            return _replace(el, newEl)
        }
    }

    // Vienmēr atgriežam jauno el, ja arī padotais el non existing
    return newEl;
}