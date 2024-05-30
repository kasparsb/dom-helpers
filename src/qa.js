import reProxy from './reProxy';

/**
 * querySelectorAll
 */
export default function(p1, p2) {
    let parentNode, querySelector;

    if (typeof p1 === 'string') {
        parentNode = document;
        querySelector = p1;
    }
    else {
        parentNode = reProxy(p1);
        querySelector = p2;
    }

    return parentNode.querySelectorAll(querySelector);
}