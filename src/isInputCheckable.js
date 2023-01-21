function isInputCheckable(input) {
    return input.type == 'checkbox' || input.type == 'radio';
}

export default isInputCheckable