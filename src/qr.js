import re from './re';
import q from './q';
import parent from './parent';

/**
 * Relative querySelector. Run querySelector relative to el
 * if querySelector starts with "parent:" then run upwards otherwise downvards as q
 */
export default function(el, querySelector) {
    el = re(el);

    let p = querySelector.indexOf(':');

    // Kurā virzienā meklēt pēc querySelector (parent|child)
    let searchDirection = querySelector.substring(0, p);
    let query = querySelector.substring(p+1);

    if (searchDirection == 'parent') {
        return parent(el, query)
    }

    // child
    return q(el, query)
}