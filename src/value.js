import q from './q';
import re from './re';
import isInputCheckable from './isInputCheckable';

export default function(p1, p2) {

    let field;

    // Ja padots otrais arguments, tad pirmais būs form un
    // otrais arguments ir form field name
    if (typeof p2 != 'undefined') {
        let form = re(p1);
        if (form) {
            field = q(form, '[name="'+p2+'"]');
        }
    }
    else {
        field = re(p1);
    }

    if (!field) {
        return '';
    }

    if (isInputCheckable(field)) {
        if (field.value == 'on') {
            return field.checked ? true : false;
        }
        else {
            return field.checked ? field.value : '';
        }
    }

    return field.value;
}