import qa from './qa';
import re from './re';
import value from './value';
import isInputCheckable from './isInputCheckable';

/**
 * Visi form elementi, kas ir padotajā parent
 * form.elements neizmantojam, jo tā ir neertība gadījumā,
 * kad vajag savākt lauku vērtības no parastam div elementa
 *
 * @nameAttributeName string iespēja norādīt custom name attribute
 * default gadījumā tiek izmantots lauka name attribute, bet
 * ar šo var norādīt citu atribūtu kurš būs name
 * Piemēram, ja name ir sarežģīts name=products[2][price]
 * tad īso name var noradīt data-name=price
 */
export default function(form, nameAttributeName) {
    if (typeof nameAttributeName == 'undefined') {
        nameAttributeName = 'name';
    }

    form = re(form);

    let fieldValues = {};

    let fields = qa(form, 'input['+nameAttributeName+'], select['+nameAttributeName+'], textarea['+nameAttributeName+']');
    for (let i = 0; i < fields.length; i++) {
        let formEl = fields[i];
        // šādi, lai darbotos arī data-* atribūti
        let name = formEl.attributes.getNamedItem(nameAttributeName).value

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
            r[name] = fieldValues[name].length > 0 ? fieldValues[name][0] : '';
        }
    }

    return r;
}