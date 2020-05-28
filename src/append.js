import isArray from './isArray';
import q from './q';

function append(el, childs) {
    // Ja el ir query selector string
    if (typeof el === 'string') {
        el = q(el);
    }

    if (!isArray(childs)) {
        childs = [childs];
    }

    for (let child of childs) {

        if (isArray(child)) {
            this.appendChilds(el, child);
        }
        else if (typeof child === 'string') {
            el.appendChild(document.createTextNode(child));
        }
        else if (typeof child === 'number') {
            el.appendChild(document.createTextNode(child));
        }
        else if (child === null) {
            el.appendChild(document.createTextNode(''));
        }
        else {
            el.appendChild(child);
        }
    }
    return el
}

export default append