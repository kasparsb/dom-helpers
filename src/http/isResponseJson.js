/**
 * Is fetch response json
 * Check only headers. Even if there is json header
 * response could be invalid json
 */
export default function(response) {
    if (!response.headers) {
        return false;
    }

    let ct = response.headers.get('content-type');
    return ct && ct.indexOf('application/json') >= 0;
}