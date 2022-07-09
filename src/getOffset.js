import re from './re';
import getWindowScrollTop from './getWindowScrollTop';
import getWindowScrollLeft from './getWindowScrollLeft';

export default function(el) {
    el = re(el);

    let rect = el.getBoundingClientRect();

    return {
        top: rect.top + getWindowScrollTop(),
        left: rect.left + getWindowScrollLeft()
    }
}