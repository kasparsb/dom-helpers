import getStyleValueAsInt from './getStyleValueAsInt';
import re from './re';

export default function(el, includeMargin) {
    el = re(el);

    includeMargin = typeof includeMargin == 'undefined' ? false : includeMargin;

    let s = getComputedStyle(el);

    let marginHorizontal = 0;
    let marginVertical = 0;
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