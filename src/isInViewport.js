import re from './re';
import getWindowDimensions from './getWindowDimensions';

export default function(el) {
    el = re(el);

    let rect = el.getBoundingClientRect();
    let wd = getWindowDimensions();

    return isOverlap(
        rect.top,
        rect.top + rect.height,
        0,
        wd.height
    ) && isOverlap(
        rect.left,
        rect.left + rect.width,
        0,
        wd.width
    )
}

function isOverlap(from1, till1, from2, till2) {
    return ((from1 >= from2) && (from1 < till2)) || ((from2 >= from1) && (till1 > from2))
}