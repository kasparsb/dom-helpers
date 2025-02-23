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

    if (p >= 0) {

        // Query daļa, bez direction daļas (īstais query)
        let relativeQuery = querySelector.substring(p+1);

        /**
         * Kurā virzienā meklēt pēc querySelector (parent|child)
         *
         * switch nostrādās tikai, ja direction ir parent vai child
         * pretējā gadījumā nostrādās pēdējais return
         * ar visu padoto querySelector
         */
        switch (querySelector.substring(0, p)) {
            case 'parent':
                return parent(el, relativeQuery);
            case 'child':
                return q(el, relativeQuery);
        }
    }

    // Uz visu document
    return q(querySelector)
}