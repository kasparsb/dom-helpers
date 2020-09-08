import parseArgumentsWithEventName from './parseArgumentsWithEventName';
import addListener from './addListener';

function click() {

    let {el, eventName, querySelector, cb} = parseArgumentsWithEventName(arguments, 'click')

    return addListener(el, eventName, querySelector, cb, false);
}

export default click