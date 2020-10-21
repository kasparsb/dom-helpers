import parseArguments from './parseArguments';
import addListener from './addListener';

function click() {
    return addListener(parseArguments(arguments, 'click'), false);
}

export default click