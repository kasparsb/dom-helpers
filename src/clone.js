import re from './re';

export default function(el, afterCb) {
    // Resolve element
    el = re(el);

    let r = el.cloneNode(true);

    // After clone actions on new node
    if (afterCb) {
        afterCb(r);
    }

    return r;
}