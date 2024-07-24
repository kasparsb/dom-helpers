import re from './re';
import qa from './qa';
import q from './q';
import getFormData from './getFormData';
import isInputCheckable from './isInputCheckable';
import setValue from './setValue';
import isArray from './isArray';
import clearFormData from './clearFormData';
/**
 * Interaktīvs form objekts
 * atgriež form lauka vērtību pēc name
 * ja set property ar lauka name, tad vērtība tiek ielikta laukā
 *
 * Nav obligāti padot formu. Jebkurš form lauks, kurš ir padotajā el
 *
 * @nameAttributeName string iespēja norādīt custom name attribute
 * default gadījumā tiek izmantots lauka name attribute, bet
 * ar šo var norādīt citu atribūtu kurš būs name
 * Piemēram, ja name ir sarežģīts name=products[2][price]
 * tad īso name var noradīt data-name=price
 */
export default function(formEl, nameAttributeName) {
    if (typeof nameAttributeName == 'undefined') {
        nameAttributeName = 'name';
    }

    formEl = re(formEl);

    return new Proxy(getFormData(formEl, nameAttributeName), {
        get(target, fieldName, receiver) {

            // Reset form fields
            if (fieldName == 'reset') {
                return function() {
                    clearFormData(formEl);
                }
            }

            return target[fieldName];
        },
        set(obj, fieldName, value) {
            if (isArray(value)) {
                let elements = qa(formEl, `[${nameAttributeName}="${fieldName}[]"]`);
                for (let i = 0; i < elements.length; i++) {
                    if (isInputCheckable(elements[i])) {
                        // vai elementa value ir masīvā
                        setValue(elements[i], value.includes(elements[i].value));
                    }
                    else {
                        setValue(elements[i], value[i]);
                    }
                }
            }
            else {
                let fieldEl = q(formEl, `[${nameAttributeName}="${fieldName}"]`);
                if (fieldEl.type == 'radio') {
                    // Atlasām visus radio buttons ar norādīto name
                    qa(formEl, `[${nameAttributeName}="${fieldName}"]`).forEach(radioFieldEl => {
                        setValue(radioFieldEl, value);
                    })
                }
                else {
                    setValue(fieldEl, value);
                }
            }

            obj[fieldName] = value;

            // paziņo, ka ir ok
            return true;
        }
    });
}