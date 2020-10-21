import hasClass from './hasClass';
import re from './re';

export default function(el, className) {
    el = re(el);

    if (hasClass(el, className)) {
        return;
    }

    if (typeof el.classList != 'undefined') {
        el.classList.add(className);
    }
    else {
        el.className += ' '+className;
    }
}