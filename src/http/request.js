import urlParams from './urlParams';

export default function(method, url, data) {

    let params = {
        headers: {
            'X-Requested-With': 'XMLHttpRequest'
        },
        method: method
    }

    if (typeof data != 'undefined') {
        if (method.toUpperCase() == 'GET') {

            // Vai url jau ir uzlikti search params ?
            url = url.split('?');

            let q = urlParams(
                data,
                // Padodam search params no url
                new URLSearchParams(url.length > 1 ? url[1] : '')
            ).toString();

            url = url[0] + (q ? '?'+q : '')
        }
        else {
            params.body = urlParams(data)
        }
    }

    return fetch(url, params)
}