import q from './q';
import re from './re';
/**
 * Ref elements
 * Give dom element. Child elements should have data atrribute ref
 * then returned Proxy object will return direct dom element by ref
 */
export default function(el) {

    el = re(el);

    return new Proxy(el, {
        get(target, prop, receiver) {
            // Pārbaudām vai pats el nav prasītais ref
            if (el.dataset.ref == prop) {
                return el
            }
            return q(el, `[data-ref=${prop}]`)
        },
    });
}