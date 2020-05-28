import parseArguments from './parseArguments';
import removeListener from './removeListener';

function remove() {
    let {el, eventName, querySelector, cb} = parseArguments(arguments)

    removeListener(el, eventName, cb);
}

export default remove