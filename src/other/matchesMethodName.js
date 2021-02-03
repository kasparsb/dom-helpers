/**
 * Store matches method name
 * Internet explorer 11 uses msMatchesSelector
 * Modern browsers - matches
 *
 * Element.prototype.matches = Element.prototype.msMatchesSelector;
 */
let n = 'matches';
if (typeof Element.prototype.msMatchesSelector != 'undefined') {
    n = 'msMatchesSelector';
}

export default n