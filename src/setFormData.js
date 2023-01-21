import re from './re';
import setValue from './setValue';
import isArray from './isArray';
import clearFormData from './clearFormData';
import isInputCheckable from './isInputCheckable';

export default function(form, data) {
    form = re(form);

    // Notīrām formas laukus
    clearFormData(form);

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
            for (let i = 0; i < elements.length; i++) {
                if (isInputCheckable(elements[i])) {
                    // vai elementa value ir masīvā
                    setValue(elements[i], data[name].includes(elements[i].value));
                }
                else {
                    setValue(elements[i], data[name][i]);
                }
            }
        }
        else {
            if (elements.length > 0) {
                setValue(elements[0], data[name])
            }
        }
    }

    return form;
}