import parseArguments from './parseArguments';
import addListener from './addListener';

export default function() {
    return addListener(parseArguments(arguments, 'submit'), true);
}