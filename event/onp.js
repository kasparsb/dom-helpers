import parseArguments from './parseArguments';
import on from './on';

function onp() {

    let {el, eventName, querySelector, cb, preventDefault} = parseArguments(arguments)

    on(el, eventName, querySelector, cb, true)
}

export default onp