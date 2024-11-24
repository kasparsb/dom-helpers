export default function(value) {
    if (!value) {
        return false;
    }

    if (typeof value != 'object') {
        return false;
    }

    if (typeof value.then !== 'function')  {
        return false;
    }

    return true;
}