/**
 * Resolve proxy element
 * Ja ir proxy, tad atgriež original elementu,
 * ja nav proxy, tad atgriež to pašu
 */
export default function(el) {
    if (el &&   el['__isproxy__']) {
        return el['__self__']
    }

    return el;
}