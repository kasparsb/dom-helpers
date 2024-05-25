import urlParams from './urlParams';

/**
 * XHR atšķiras veids kā nolasa headers un response
 * tāpēc te nevar izmantot jsonOnText, kurš tiek izmanots priekš fetch
 */
function isResponseJson(xhr) {
    let ct = xhr.getResponseHeader('content-type');
    return ct && ct.indexOf('application/json') >= 0;
}


function upload(url, file, data, progressCb) {
    return new Promise((resolve, reject) => {
        let reader = new FileReader();
        let request = new XMLHttpRequest();

        request.upload.addEventListener('progress', ev => {
            if (ev.lengthComputable && progressCb) {
                progressCb(Math.round((ev.loaded * 100) / ev.total));
            }
        }, false);

        request.onreadystatechange = function() {
            // In local files, status is 0 upon success in Mozilla Firefox
            if (request.readyState === XMLHttpRequest.DONE) {
                if (request.status === 200) {
                    if (isResponseJson(request)) {
                        return resolve(JSON.parse(request.responseText));
                    }
                    else {
                        resolve(request.responseText);
                    }
                }
                else {
                    if (request.status == 413) {
                        return reject({
                            code: request.status,
                            message: 'Content too large'
                        });
                    }
                    else {
                        if (isResponseJson(request)) {
                            return reject({
                                code: request.status,
                                message: JSON.parse(request.responseText)
                            });
                        }
                        else {
                            reject({
                                code: request.status,
                                message: request.responseText
                            });
                        }
                    }
                }
            }
        }

        /**
         * Papildus data liekam kā URL params
         * Sākumā pārbaudām vai url jau ir uzlikti search params ?
         */
        url = url.split('?');
        let q = urlParams(
            data,
            // Padodam search params no url
            new URLSearchParams(url.length > 1 ? url[1] : '')
        ).toString();
        url = url[0] + (q ? '?'+q : '')

        request.open('POST', url);
        request.setRequestHeader('Content-Type', file.type);

        reader.onload = function(ev) {
            request.send(ev.target.result);
        }
        reader.readAsBinaryString(file);
    });
}

export default upload