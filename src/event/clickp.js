import parseArguments from './parseArguments';
import addListener from './addListener';

function clickp() {

    let {el, eventName, querySelector, cb} = parseArguments(arguments, 'click')

    return addListener(el, eventName, querySelector, cb, true);
}

export default clickp