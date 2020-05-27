import parseArguments from './parseArguments';

/**
 * Pievieno event listener
 * Iekšējai izmantošanai. Šeit vajag padot tieši šos parametrus
 * Atšķirībā no on un onp funkcijā, kurām var mainīties padoto argumentu secība
 */
function addListener(el, eventName, querySelector, cb, preventDefault) {

    el.addEventListener(eventName, function(ev){

        let matchedEl = ev.target;
        
        if (querySelector) {
            while (matchedEl && (matchedEl !== el)) {

                if (matchedEl.matches(querySelector)) {

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

    })
}

export default addListener