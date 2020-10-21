import parseArguments from './parseArguments';
import addListener from './addListener';

function click() {

    let {el, eventName, querySelector, cb} = parseArguments(arguments, 'click')

    return addListener(el, eventName, querySelector, cb, false);
}

export default click