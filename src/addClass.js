import hasClass from './hasClass';
import re from './re';

function addClass(el, className) {
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

export default addClass