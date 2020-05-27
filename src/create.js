import setAttributes from './setAttributes';
import append from './append';

function create(elementName, attributes, ...childs) {
    let el = document.createElement(elementName);

    if (attributes) {
        setAttributes(el, attributes);
    }

    append(el, childs)

    return el;
}

export default create