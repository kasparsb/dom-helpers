import parseArguments from './parseArguments';
import removeListener from './removeListener';

function off() {
    let {el, eventName, querySelector, cb} = parseArguments(arguments)

    removeListener(el, eventName, cb);
}

export default off