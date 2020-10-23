export default function(el, newEl) {
    if (el && el.parentNode) {
        if (newEl) {
            el.parentNode.replaceChild(newEl, el);
        }
        else {
            el.parentNode.removeChild(el);
        }
    }

    return newEl;
}