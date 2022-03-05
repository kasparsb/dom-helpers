import qa from './qa';

/**
 * Resolve dom element.
 * First check if el is string representing selector, then
 * find element matching selector using document.querySelectorAll function
 * Always return NodeList or array, even if els is single Dom Node
 */
export default function(els) {
    if (typeof els === 'string') {
        return qa(els);
    }

    // If single dom node
    if (typeof els == 'object' && typeof els.tagName != 'undefined') {
        return [els];
    }

    return els;
}