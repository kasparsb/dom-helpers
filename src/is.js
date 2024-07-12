import matchesMethodName from './other/matchesMethodName';
import re from './re';

/**
 * Vai padotais elements atbilst padotajam querySelector
 */
export default function(el, querySelector) {
    el = re(el);

    if (el[matchesMethodName]) {
        return el[matchesMethodName](querySelector);
    }

    return false;
}