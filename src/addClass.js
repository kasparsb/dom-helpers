import hasClass from './hasClass';
import rea from './rea';

export default function(els, className) {
    rea(els).forEach(el => {
        if (!hasClass(el, className)) {
            if (typeof el.classList != 'undefined') {
                el.classList.add(className);
            }
            else {
                el.className += ' '+className;
            }
        }
    })
}