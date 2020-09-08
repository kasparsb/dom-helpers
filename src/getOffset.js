import re from './re';

function getOffset(el) {
    el = re(el);

    let rect = el.getBoundingClientRect();
    let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    return {
        top: rect.top + scrollTop,
        left: rect.left + scrollLeft
    }
}

export default getOffset