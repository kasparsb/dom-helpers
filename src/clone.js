import re from './re';

export default function(el) {
    // Resolve element
    el = re(el);
    console.log(el);

    return el.cloneNode(true)
}