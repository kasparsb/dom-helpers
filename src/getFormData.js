import re from './re';
import value from './value';
import isInputCheckable from './isInputCheckable';

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

        let name = form.elements[i].name;

        // Array field
        if (name.substring(name.length-2) == '[]') {
            name = name.substring(0, name.length-2);
            if (typeof r[name] == 'undefined') {
                r[name] = [];
            }

            if (isInputCheckable(form.elements[i])) {
                if (form.elements[i].checked) {
                    r[name].push(value(form.elements[i]));
                }
            }
            else {
                r[name].push(value(form.elements[i]));
            }
        }
        else {
            if (isInputCheckable(form.elements[i])) {
                if (form.elements[i].checked) {
                    r[name] = value(form.elements[i])
                }
                else {
                    r[name] = false;
                }
            }
            else {
                r[name] = value(form.elements[i]);
            }
        }
    }

    return r;
}