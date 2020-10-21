export default function(target, element) {
    let n = target.parentNode;

    while (n) {
        if (n == element) {
            return true;
        }
        n = n.parentNode;
    }
    return false;
}