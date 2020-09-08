import re from './re';

function removeClass(el, className) {
    el = re(el);

    if (typeof el.classList != 'undefined') {
        el.classList.remove(className);
    }
    else {
        el.className = el.className.replace(new RegExp('(?:^|\\s)'+className+'(?!\\S)', 'ig'), '');
    }
}

export default removeClass