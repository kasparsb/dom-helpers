import setAttributes from './setAttributes';
import append from './append';

export default function(elementName, attributes, ...childs) {
    let el = document.createElement(elementName);

    if (attributes) {
        setAttributes(el, attributes);
    }

    append(el, childs)

    return el;
}