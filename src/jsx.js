import setAttributes from './setAttributes';
import append from './append';

/**
 * Helpers for using jsx syntax to create dom elements
 * use babel pragma to set custom handler for creating dom elements
 */
let jsx = {
    Fragment: 'fragment',

    h: function (elementName, attributes, ...childs) {
        let el;

        if (elementName === this.Fragment) {
            el = new DocumentFragment();
        }
        else if (typeof elementName == 'function') {
            el = elementName(attributes);
        }
        else {
            el = document.createElement(elementName);

            if (attributes) {
                setAttributes(el, attributes);
            }
        }

        if (el) {
            append(el, childs)
        }

        return el;
    }
}

export default jsx