import re from './re';

function setAttributes(el, attributes) {
    el = re(el);

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
        else {
            el.setAttribute(key, value);
        }
    }
}

export default setAttributes