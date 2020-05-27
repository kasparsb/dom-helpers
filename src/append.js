function append(el, childs) {
    for (let child of childs) {

        if (Array.isArray(child)) {
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