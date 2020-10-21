import parseArguments from './parseArguments';
import removeListener from './removeListener';

export default function() {
    let {el, eventName, querySelector, cb} = parseArguments(arguments)

    removeListener(el, eventName, cb);
}