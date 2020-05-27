import getStyleValueAsInt from './getStyleValueAsInt';

function getDimensions(el) {
    var s = getComputedStyle(el);

    // Noņemam border width
    var borderHorizontal = getStyleValueAsInt(s, 'border-left-width') + getStyleValueAsInt(s, 'border-right-width');
    var borderVertical = getStyleValueAsInt(s, 'border-top-width') + getStyleValueAsInt(s, 'border-bottom-width');

    // Noņemam padding width
    var paddingHorizontal = getStyleValueAsInt(s, 'padding-left') + getStyleValueAsInt(s, 'padding-right');
    var paddingVertical = getStyleValueAsInt(s, 'padding-top') + getStyleValueAsInt(s, 'padding-bottom');

    if (typeof el.getBoundingClientRect != 'undefined') {
        if (typeof el.getBoundingClientRect().width != 'undefined' && typeof el.getBoundingClientRect().height != 'undefined') {
            return {
                width: el.getBoundingClientRect().width - borderHorizontal - paddingHorizontal,
                height: el.getBoundingClientRect().height - borderVertical - paddingVertical
            }
        }
    }

    return {
        width: el.offsetWidth - borderHorizontal - paddingHorizontal,
        height: el.offsetHeight - borderVertical - paddingVertical
    }
}

export default getDimensions;