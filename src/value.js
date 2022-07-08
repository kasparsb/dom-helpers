import re from './re';

export default function(el) {
    el = re(el);

    if (!el) {
        return '';
    }

    if (el.type == 'checkbox' || el.type == 'radio') {
        return el.checked ? el.value : '';
    }

    return el.value;
}