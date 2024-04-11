/**
 * Hack, lai createRenderer4 varētu zināt, ka ir jākolektē refs no
 * padotajiem attributes
 *
 * jsx saukt canCollect, ja tas ir true, tad sāk collect un padots šeit
 * createRenderer4 pateiks ar startCollect, ka jāsāk
 *
 */

let state = false;

let refs = {};
let funcs = [];

export default {
    canCollect() {
        return state;
    },
    startCollect() {
        refs = {};
        funcs = [];
        state = true
    },
    stopCollect() {
        state = false
    },
    addRef(name, el) {
        refs[name] = el
    },
    getRefs() {
        return refs;
    },

    addFunc(f) {
        funcs.push(f)
    },
    getFuncs() {
        return funcs
    }
}