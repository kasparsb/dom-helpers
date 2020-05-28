function getStyleValueAsInt(style, name) {
    return parseInt(style.getPropertyValue(name), 10);
}

export default getStyleValueAsInt
