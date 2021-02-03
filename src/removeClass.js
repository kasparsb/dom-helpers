import rea from './rea';

export default function(els, className) {
    rea(els).forEach(el => {
        if (typeof el.classList != 'undefined') {
            el.classList.remove(className);
        }
        else {
            el.className = el.className.replace(new RegExp('(?:^|\\s)'+className+'(?!\\S)', 'ig'), '');
        }
    })
}