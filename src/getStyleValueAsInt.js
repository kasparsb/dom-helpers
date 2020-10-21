export default function(style, name) {
    return parseInt(style.getPropertyValue(name), 10);
}