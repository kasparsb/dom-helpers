import re from './re';

export default function(el, className) {
    el = re(el);

    if (typeof el.classList != 'undefined') {
        el.classList.remove(className);
    }
    else {
        el.className = el.className.replace(new RegExp('(?:^|\\s)'+className+'(?!\\S)', 'ig'), '');
    }
}