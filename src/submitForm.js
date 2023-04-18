import re from './re';
import request from './http/request';
import jsonOrText from './http/jsonOrText';
import getFormData from './getFormData';

export default function(form) {
    form = re(form);

    return request(form.method, form.action, getFormData(form))
        .then(jsonOrText)
}