import q from './q';

/**
 * replace element childs with new dom element
 */
function replaceContent(p1, p2, p3) {

    let parentNode, querySelector, newChild;

    /**
     * @todo Šito vajag pārtaisīt, lai padot elementu bez parentNode
     * Tagad sanāk, ka jāpadod elements un selector pēc, kura atlasīt
     * elementus, kurus replace
     */

    if (typeof p1 === 'string') {
        parentNode = document;
        querySelector = p1;
        newChild = p2;
    }
    else {
        parentNode = p1;
        querySelector = p2;
        newChild = p3;
    }

    let el = parentNode.querySelector(querySelector);

    el.innerHTML = '';
    if (newChild) {
        el.appendChild(newChild)
    }
}

export default replaceContent
