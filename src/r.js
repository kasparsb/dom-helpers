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
            if (el.dataset.r == prop) {
                return el
            }

            /**
             * Relation elements overraido el native props
             * Ja ir atrasts relation el, tad to atgriež
             */
            let relEl = q(el, `[data-r=${prop}]`);
            if (relEl) {
                return relEl;
            }
            else {
                /**
                 * Ja nav atrats relation el, tad atgriežam prop no el
                 */
                return el[prop];
            }
        },
        set(obj, prop, newValue) {
            obj[prop] = newValue
        }
    });
}