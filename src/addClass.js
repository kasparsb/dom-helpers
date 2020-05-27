import hasClass from './hasClass';

function addClass(el, className) {
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