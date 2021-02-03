import re from './re';
import isEmpty from './isEmpty';

export default function(el, attributes) {
    el = re(el);

    let tagName = el.tagName.toUpperCase();
    let value;

    for (let key in attributes) {
        if (!attributes.hasOwnProperty(key)) {
            continue;
        }

        value = attributes[key];

        if (key == 'className') {
            key = 'class';
        }

        if (key.substr(0, 5) == 'data-') {
            el.dataset[key.substr(5)] = value;
        }
        else if (key == 'style') {
            for (let k in value) {
                el.style[k] = value[k];
            }
        }
        else if (key == 'checked' && tagName == 'INPUT') {
            el.checked = value ? true : false;
        }
        else {
            el.setAttribute(key, isEmpty(value) ? '' : value);
        }
    }
}