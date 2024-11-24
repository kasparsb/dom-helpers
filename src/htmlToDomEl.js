export default function (html) {
    // Šis veido DOM document
    let newEl = (new DOMParser()).parseFromString(html, 'text/html')
    // Ņemam tikai pirmo child no body
    return newEl.body.firstChild;
}