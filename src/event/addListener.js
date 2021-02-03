import matchesMethodName from '../other/matchesMethodName';

/**
 * Pievieno event listener.
 * Iekšējai izmantošanai
 * @param args event funkcijas argument (el, eventName, querySelector, cb)
 */
export default function(args, preventDefault) {
    let {el, eventName, querySelector, cb} = args;

    // Atgriežam event handler, lai to var remove
    let eventHandler = function(ev) {
        let matchedEl = ev.target;

        if (querySelector) {
            while (matchedEl && (matchedEl !== el)) {

                if (matchedEl[matchesMethodName](querySelector)) {

                    // Auto Prevent event
                    if (preventDefault) {
                        ev.preventDefault();
                    }

                    if (cb) {
                        cb(ev, matchedEl);
                    }

                    return;
                }

                matchedEl = matchedEl.parentNode;
            }
        }
        else {
            // Auto Prevent event
            if (preventDefault) {
                ev.preventDefault();
            }

            if (cb) {
                cb(ev, matchedEl);
            }
        }
    }

    el.addEventListener(eventName, eventHandler);

    return eventHandler;
}