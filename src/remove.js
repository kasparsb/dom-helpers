/**
 * Remove dom element
 */
function remove(el) {
    if (el.parentNode) {
        el.parentNode.removeChild(el);
    }
}

export default remove;