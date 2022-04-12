import urlParams from './urlParams';

export default function(url, data) {
    let q = '';
    if (typeof data != 'undefined') {
        q = urlParams(data).toString()
    }

    fetch(url+(q ? '?'+q : ''))
        .then(response => response.text())
        .then(response => console.log(response))
}