import parseArguments from './parseArguments';

/**
 * Event handler which always calls preventDefault on event
 * Callback funkcijai pirmais tiek padots elements, kurš
 * atbilst querySelector, otrais ir event
 * Šī ir atšķirība no eh
 */

function on() {

    let {el, eventName, querySelector, cb, preventDefault} = parseArguments(arguments)

    el.addEventListener(eventName, function(ev){

        let matchedEl = ev.target;
        
        if (querySelector) {
            while (matchedEl && (matchedEl !== el)) {

                if (matchedEl.matches(querySelector)) {

                    // Auto Prevent event
                    if (preventDefault) {
                        
                        ev.preventDefault();
                    }

                    cb(ev, matchedEl);

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

            cb(ev, matchedEl);
        }

    })
}

export default on