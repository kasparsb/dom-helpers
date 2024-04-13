import qa from './qa';
import re from './re';
import value from './value';
import isInputCheckable from './isInputCheckable';

/**
 * Visi form elementi, kas ir padotajā parent
 * form.elements neizmantojam, jo tā ir neertība gadījumā,
 * kad vajag savākt lauku vērtības no parastam div elementa
 */
export default function(form) {
    form = re(form);

    let fieldValues = {};

    let fields = qa(form, 'input[name], select[name], textarea[name]');
    for (let i = 0; i < fields.length; i++) {
        let formEl = fields[i];
        let name = formEl.name;

        /**
         * Visus laukus pirmajā piegājienā uzskatām par
         * array. Šeit vēl nepārbaudām vai name beidzas ar []
         * Tas ir ar domu, ja ir vairāki lauki ar vienādiem name
         */
        if (typeof fieldValues[name] == 'undefined') {
            fieldValues[name] = [];
        }

        if (isInputCheckable(formEl)) {
            if (formEl.checked) {
                fieldValues[name].push(value(formEl));
            }
        }
        else {
            fieldValues[name].push(value(formEl));
        }
    }

    let r = {}
    for (let name in fieldValues) {
        if (name.substring(name.length-2) == '[]') {
            r[name.substring(0, name.length-2)] = fieldValues[name];
        }
        else {
            // ņemam pirmo vērtību
            r[name] = fieldValues[name].length > 0 ? fieldValues[name].at(0) : '';
        }
    }

    return r;
}