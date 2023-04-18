import qa from './qa';
import re from './re';
import setValue from './setValue';
import isArray from './isArray';
import clearFormData from './clearFormData';
import isInputCheckable from './isInputCheckable';

export default function(form, data) {
    form = re(form);

    // Notīrām formas laukus
    clearFormData(form);

    let formElements = [...qa(form, 'input, select, textarea')];

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
                // Vairāki checkable elementi ar vienādu vārdu
                if (isInputCheckable(elements[0])) {
                    // check to, kuram value ir tāds kā padots data[name]
                    if (typeof data[name] != 'boolean') {
                        let foundByValue = elements.find(el => el.value == data[name])
                        if (foundByValue) {
                            setValue(foundByValue, data[name]);
                        }
                    }
                    else {
                        // Check pirmo, kuram nav uzstādīts value
                        let foundWithoutValue = elements.find(el => {
                            if (!el.value) {
                                return true;
                            }
                            if (el.value == 'on') {
                                return true;
                            }

                            return false;
                        })
                        if (foundWithoutValue) {
                            setValue(foundWithoutValue, data[name])
                        }
                    }
                }
                else {
                    setValue(elements[0], data[name])
                }
            }
        }
    }

    return form;
}