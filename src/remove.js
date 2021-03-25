import rea from './rea';

export default function(el) {
    rea(el).forEach(el => {
        if (el.parentNode) {
            el.parentNode.removeChild(el);
        }
    })
}