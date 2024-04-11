let references = {};

function renderSingle(name, data, renderer) {
    let domElement;
    if (typeof references[name] == 'undefined') {
        console.log('create');
        domElement = renderer.create(data);
        console.log(domElement);
    }
    else {
        console.log('update');
        domElement = renderer.update(data, references[name]);
    }

    references[name] = domElement;

    return domElement;
}

export {
    renderSingle
}