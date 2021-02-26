export default function (c) {
    return typeof c === 'string' || typeof c === 'number' || typeof c === 'undefined' || c === null
}