import re from './re';
import isPromise from './isPromise';
import ensureDomNode from './ensureDomNode';

/**
 * Replace element with new element
 * New element can be dom node or html
 */
export default function(el, newEl) {
    el = re(el);

    // Vienmēr atgriežam jauno el, ja arī padotais el non existing
    if (!el) {
        return newEl
    }
    if (!el.parentNode) {
        return newEl
    }
    if (!newEl) {
        return newEl;
    }

    newEl = ensureDomNode(newEl);

    // Promise gadījumā atgriežam arī promise
    if (isPromise(newEl)) {
        return new Promise(resolve => {
            newEl.then(newEl => {

                el.parentNode.replaceChild(newEl, el);

                resolve(newEl)
            })
        })
    }

    el.parentNode.replaceChild(newEl, el);
    return newEl;
}