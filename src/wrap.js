import re from './re';

export default function(el, wrapEl) {
    el = re(el);

    let parent = el.parentNode;
    if (!parent) {
        return null;
    }

    // Ja ir padots tag name
    if (typeof wrapEl == 'string') {
        wrapEl = document.createElement(wrapEl);
    }

    wrapEl.appendChild(parent.replaceChild(wrapEl, el));

    return wrapEl;
}