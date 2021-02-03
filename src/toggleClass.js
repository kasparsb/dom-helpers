import hasClass from './hasClass';
import addClass from './addClass';
import removeClass from './removeClass';

/**
 * @param addOrRemove boolean|undefined. If true, than addClass. If false - removeClass
 */
export default function(el, className, addOrRemove) {
    if (typeof addOrRemove != 'undefined') {
        // Add className if there is no this className already added
        if (addOrRemove && !hasClass(el, className)) {
            addClass(el, className)
        }
        // Remove class
        else if (!addOrRemove) {
            removeClass(el, className);
        }
    }
    else {
        // Toggle
        if (hasClass(el, className)) {
            removeClass(el, className);
        }
        else {
            addClass(el, className);
        }
    }


    return el;
}