import parseArgumentsWithEventName from './parseArgumentsWithEventName';
import addListener from './addListener';

function clickp() {

    let {el, eventName, querySelector, cb} = parseArgumentsWithEventName(arguments, 'click')

    return addListener(el, eventName, querySelector, cb, true);
}

export default clickp