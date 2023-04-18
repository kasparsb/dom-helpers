import qa from './qa';
import re from './re';
import setValue from './setValue';

export default function(form) {
    form = re(form);

    [...qa(form, 'input, select, textarea')].forEach(field => setValue(field, null));

    return form;
}