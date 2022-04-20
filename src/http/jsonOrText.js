import isResponseJson from './isResponseJson';

/**
 * Check respone content type and parse response
 * If content type is json then parse json response
 * otherwise return text response
 */
export default function(response) {
    if (isResponseJson(response)) {
        return response.json()
    }
    else {
        return response.text()
    }
}