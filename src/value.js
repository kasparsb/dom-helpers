import re from './re';

export default function(p1, p2) {

    let field;

    // Ja padots otrais arguments, tad pirmais būs form un
    // otrais arguments ir form field name
    if (typeof p2 != 'undefined') {
        let form = re(p1);
        if (form) {
            field = form.elements[p2];
        }
    }
    else {
        field = re(p1);
    }

    if (!field) {
        return '';
    }

    if (field.type == 'checkbox' || field.type == 'radio') {
        return field.checked ? field.value : '';
    }

    return field.value;
}