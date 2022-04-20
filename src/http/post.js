import jsonOrText from './jsonOrText';
import request from './request';

export default function(url, data) {
    return request('POST', url, data)
        .then(jsonOrText)
}