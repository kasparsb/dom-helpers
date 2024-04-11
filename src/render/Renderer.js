function Renderer(create, update, remove) {
    this.create = create;
    this.update = update;
    this.remove = remove;
}
Renderer.prototype = {
    create(data, existingEl) {
        return this.create.apply(this, [data, existingEl]);
    },
    update(data, el) {
        return this.update.apply(this, [data, el]);
    },
    remove(el) {
        /**
         * Varbūt vajag reuse dzēšamos elementus
         */
        return this.remove(this, [el])
    }
}

export default Renderer