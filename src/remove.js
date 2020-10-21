/**
 * Remove dom element
 */
export default function(el) {
    if (el.parentNode) {
        el.parentNode.removeChild(el);
    }
}