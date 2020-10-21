import parseArguments from './parseArguments';
import addListener from './addListener';

function on() {
    return addListener(parseArguments(arguments), false);
}

export default on