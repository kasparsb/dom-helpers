/**
 * Array un NodeList būs kā array
 *
 * Nevar skatīties pēs .length un iterator, jo .length ir arī form elementam
 */
export default function(value) {
    return Object.prototype.toString.call(value) === '[object Array]' || Object.prototype.toString.call(value) === '[object NodeList]';
}