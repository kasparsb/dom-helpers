import getStyleValueAsInt from './getStyleValueAsInt';

function getOuterDimensions(el, includeMargin) {
    includeMargin = typeof includeMargin == 'undefined' ? false : includeMargin;

    var s = getComputedStyle(el);

    var marginHorizontal = 0;
    var marginVertical = 0;
    if (includeMargin) {
        marginHorizontal = getStyleValueAsInt(s, 'margin-left') + getStyleValueAsInt(s, 'margin-right');
        marginVertical = getStyleValueAsInt(s, 'margin-top') + getStyleValueAsInt(s, 'margin-bottom');    
    }

    if (typeof el.getBoundingClientRect != 'undefined') {
        if (typeof el.getBoundingClientRect().width != 'undefined' && typeof el.getBoundingClientRect().height != 'undefined') {
            return {
                width: el.getBoundingClientRect().width + marginHorizontal,
                height: el.getBoundingClientRect().height + marginVertical,

                marginH: marginHorizontal,
                marginV: marginVertical
            }
        }
    }

    return {
        width: el.offsetWidth + marginHorizontal,
        height: el.offsetHeight + marginVertical,

        marginH: marginHorizontal,
        marginV: marginVertical
    }
}

export default getOuterDimensions;