import re from './re';
import setValue from './setValue';

export default function(form, data) {
    form = re(form);

    [...form.elements].forEach(field => setValue(field, null));

    return form;
}