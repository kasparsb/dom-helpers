import Renderer from "./Renderer";

function createRenderer(create, update, remove) {
    return new Renderer(create, update, remove);
}

export default createRenderer