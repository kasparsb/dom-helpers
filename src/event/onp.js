import parseArguments from './parseArguments';
import addListener from './addListener';

function onp() {

    let {el, eventName, querySelector, cb} = parseArguments(arguments)

    // Vienmēr padodam preventDefault kā true
    return addListener(el, eventName, querySelector, cb, true)
}

export default onp