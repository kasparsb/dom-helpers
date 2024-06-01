import q from './q';
import re from './re';
/**
 * Ref elements
 * Give dom element. Child elements should have data atrribute ref
 * then returned Proxy object will return direct dom element by ref
 */
function createProxy(el) {
    return new Proxy(el, {
        get(target, prop, receiver) {

            /**
             * Helper metodes, lai varētu ātri iegūt original el
             * un noteikt vai elements ir proxy
             */
            if (prop == '__self__') {
                return el;
            }
            if (prop == '__isproxy__') {
                return true;
            }

            // Pārbaudām vai prasītais prop ir pašam objektam
            if (prop in el) {
                return el[prop]
            }

            // Pašās beigās meklējam pēc relation un atgriežām kā r objektu
            return createProxy(q(el, `[data-r=${prop}]`));
        },
        set(obj, prop, newValue) {
            obj[prop] = newValue;

            return true;
        }
    });
}

function r(el) {
    el = re(el);
    return createProxy(el)
}


export default r