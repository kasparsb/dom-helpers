import setAttributes from './setAttributes';
import append from './append';


/**
 * Hack, lai createRenderer4 varētu zināt, ka ir jākolektē refs no
 * padotajiem attributes
 */
import startCollectingRefs from './render/startCollectingRefs';

/**
 * Helpers for using jsx syntax to create dom elements
 * use babel pragma to set custom handler for creating dom elements
 */
export default {
    Fragment: 'fragment',

    h: function (elementName, attributes, ...childs) {
        let el;

        if (elementName === this.Fragment) {
            el = new DocumentFragment();
        }
        else if (typeof elementName == 'function') {
            if (startCollectingRefs.canCollect()) {
                startCollectingRefs.addFunc(elementName);
            }
            el = elementName(attributes);
        }
        else {
            el = document.createElement(elementName);

            if (startCollectingRefs.canCollect()) {
                if (attributes && (typeof attributes.ref != 'undefined')) {
                    startCollectingRefs.addRef(attributes.ref, el);
                }
            }

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