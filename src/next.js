import re from './re';

/**
 * Return next node after passed node
 */
export default function(el) {
    el = re(el);

    return el.nextSibling;
}