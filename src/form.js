import re from './re';
import value from './value';

export default function(form) {
    form = re(form);

    let r = {};
    for (let i = 0; i < form.length; i++) {

        if (form.elements[i].nodeName == 'FIELDSET') {
            continue;
        }

        if (!form.elements[i].name) {
            continue;
        }

        r[form.elements[i].name] = value(form.elements[i]);
    }

    return r;
}