import rea from './rea';
import hasClass from './hasClass';
import addClass from './addClass';
import removeClass from './removeClass';

/**
 * @param addOrRemove boolean|undefined. If true, than addClass. If false - removeClass
 */
export default function(els, className, addOrRemove) {
    rea(els).forEach(el => {
        if (typeof addOrRemove != 'undefined') {
            if (addOrRemove) {
                addClass(el, className)
            }
            else {
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
    })
}