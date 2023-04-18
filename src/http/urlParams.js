function formatUrlParamKey(path) {
    let r = '';
    for (let i = 0; i < path.length; i++) {
        if (i == 0) {
            r += path[i];
        }
        else {
            r += '['+path[i]+']';
        }
    }
    return r;
}

function qp(data, path, pairs) {

    if (typeof path == 'undefined') {
        path = [];
    }

    if (typeof pairs == 'undefined') {
        pairs = [];
    }

    for (let field in data) {

        let keys = Array.from(path);
        keys.push(field);

        if (typeof data[field] === 'object') {
            pairs = qp(data[field], keys, pairs);
        }
        else {

            pairs.push([keys, data[field]])
        }

    }

    return pairs;
}

export default function(data, urlParams) {
    let pairs = qp(data);

    /**
     * Padodam iekšā jau gatavu url search params objektu
     * tas ir gadījumie, kad ir padots url ar jau uzliktiem
     * get parametriem. Tādā gadījumā tos parametrus papildinām
     * ar padotajiem data paramatriem
     */
    if (typeof urlParams == 'undefined') {
        urlParams = new URLSearchParams();
    }
    for (let i = 0; i < pairs.length; i++) {
        urlParams.set(formatUrlParamKey(pairs[i][0]), pairs[i][1])
    }

    return urlParams;
}