import parseArguments from './parseArguments';
import addListener from './addListener';

function clickp() {
    return addListener(parseArguments(arguments, 'click'), true);
}

export default clickp