import pe from './pe';

/**
 * querySelector
 */
export default function(p1, p2) {

    let parentNode, querySelector;

    if (typeof p1 === 'string') {
        parentNode = document;
        querySelector = p1;
    }
    else {
        parentNode = pe(p1);
        querySelector = p2;
    }

    return parentNode.querySelector(querySelector);
}