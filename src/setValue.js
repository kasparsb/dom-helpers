import re from './re';

export default function(p1, p2, p3) {

    let field;
    let value;

    // Ja padots trešais arguments, tad pirmais būs form un
    // otrais arguments ir field name
    if (typeof p3 != 'undefined') {
        let form = re(p1);
        if (form) {
            field = form.elements[p2];
        }
        value = p3;
    }
    else {
        field = re(p1);
        value = p2;
    }

    if (typeof value == 'undefined') {
        value = null;
    }

    if (!field) {
        return '';
    }

    if (field.type == 'checkbox' || field.type == 'radio') {
        return field.checked = value ? true : false;
    }
    else {
        return field.value = value;
    }

    return field.value;
}