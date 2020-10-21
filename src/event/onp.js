import parseArguments from './parseArguments';
import addListener from './addListener';

function onp() {
    return addListener(parseArguments(arguments), true)
}

export default onp