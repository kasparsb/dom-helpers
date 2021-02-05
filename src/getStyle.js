import re from './re';

export default function(el, name) {
    el = re(el);

    let s = getComputedStyle(el)
    if (!s) {
        return undefined;
    }
    return s.getPropertyValue(name);
}