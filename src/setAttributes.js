import re from './re';

export default function(el, attributes) {
    el = re(el);

    let tagName = el.tagName.toUpperCase();

    for (let [key, value] of Object.entries(attributes)) {
        if (key == 'className') {
            key = 'class';
        }

        if (key.substr(0, 5) == 'data-') {
            el.dataset[key.substr(5)] = value;
        }
        else if (key == 'style') {
            for (let [k, v] of Object.entries(value)) {
                el.style[k] = v;
            }
        }
        else if (key == 'checked' && tagName == 'INPUT') {
            el.checked = value ? true : false;
        }
        else {
            el.setAttribute(key, value);
        }
    }
}