import parseArguments from './parseArguments';
import addListener from './addListener';

function on() {

    let {el, eventName, querySelector, cb} = parseArguments(arguments)

    addListener(el, eventName, querySelector, cb, false);
}

export default on