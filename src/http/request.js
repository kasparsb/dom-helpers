import urlParams from './urlParams';

export default function(method, url, data) {

    console.log('request', method, url, data);

    let params = {
        headers: {
            'X-Requested-With': 'XMLHttpRequest'
        },
        method: method
    }

    if (typeof data != 'undefined') {
        if (method.toUpperCase() == 'GET') {
            let q = urlParams(data).toString();
            console.log(q);
            url = url + (q ? '?'+q : '')
        }
        else {
            params.body = urlParams(data)
        }
    }

    return fetch(url, params)
}