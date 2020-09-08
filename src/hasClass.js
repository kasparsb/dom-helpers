import re from './re';

function hasClass(el, className) {
    el = re(el);

    if (typeof el.classList != 'undefined') {
        return el.classList.contains(className);
    }
    else {
        return el.className.match(new RegExp('(?:^|\\s)'+className+'(?!\\S)', 'ig')) ? true : false;
    }
}

export default hasClass;