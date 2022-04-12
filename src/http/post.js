import urlParams from './urlParams';

export default function(url, data) {
    if (typeof data == 'undefined') {
        data = {}
    }

    fetch(url, {
        headers: {
            'X-Requested-With': 'XMLHttpRequest'
        },
        method: 'POST',
        body: urlParams(data)
    })
        .then(response => response.json())
}