import re from './re';

export default function(el, newEl) {
    el = re(el);

    if (el && el.parentNode && newEl) {
        // ja string, tad parsējam par Node

        if (typeof newEl === 'string') {
            // Šis veido DOM document
            newEl = (new DOMParser()).parseFromString(newEl, 'text/html')
            // Ņemam tikai pirmo child no body
            newEl = newEl.body.firstChild;
        }

        el.parentNode.replaceChild(newEl, el);

        return newEl;
    }
}