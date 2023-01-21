import re from './re';
import value from './value';
import isArray from './isArray';
import isInputCheckable from './isInputCheckable';

export default function(form, data) {
    form = re(form);

    let formElements = [...form.elements];

    for (let name in data) {

        let elements = [];
        if (isArray(data[name])) {
            elements = formElements.filter(el => el.name == name+'[]')
        }
        else {
            elements = formElements.filter(el => el.name == name)
        }

        if (isArray(data[name])) {
            for (let i = 0; i < data[name].length; i++) {
                if (i < elements.length) {
                    if (isInputCheckable(elements[i])) {
                        // vai elementa value ir masīvā
                        elements[i].checked = data[name].includes(elements[i].value)
                    }
                    else {
                        elements[i].value = data[name][i];
                    }
                }
            }
        }
        else {
            if (elements.length > 0) {
                elements[0].value = data[name]
            }
        }
    }

    return form;
}