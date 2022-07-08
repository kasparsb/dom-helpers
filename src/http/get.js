import jsonOrText from './jsonOrText';
import request from './request';

export default function(url, data) {
    return request('GET', url, data)
        .then(jsonOrText)
}