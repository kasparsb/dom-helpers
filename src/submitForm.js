import re from './re';
import request from './http/request';
import jsonOrText from './http/jsonOrText';
import getFormData from './getFormData';

/**
 * TODO vajag veidu, kā dot iespēju pielabot formData pirms submit
 */
export default function(form, url, method) {
    form = re(form);

    if (typeof url == 'undefined') {
        url = form.action;
    }
    if (typeof method == 'undefined') {
        method = form.method;
    }

    return request(method, url, getFormData(form))
        .then(jsonOrText)
}