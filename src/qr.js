import re from './re';
import q from './q';
import parent from './parent';

/**
 * Relative querySelector. Run querySelector relative to el
 * if querySelector starts with "parent:" then run upwards
 * if querySelector starts with "child:" then run downwards
 * if none, than run on document
 */
export default function(el, querySelector) {
    el = re(el);

    let p = querySelector.indexOf(':');

    let query = querySelector;
    if (p >= 0) {
        // Kurā virzienā meklēt pēc querySelector (parent|child)
        let searchDirection = querySelector.substring(0, p);

        query = querySelector.substring(p+1);

        switch (searchDirection) {
            case 'parent':
                return parent(el, query);
            case 'child':
                return q(el, query);
        }
    }

    // Uz visu document
    return q(query)
}