import create from './create';

/**
 * Helpers for using jsx syntax to create dom elements
 * use babel pragma to set custom handler for creating dom elements
 */
let jsx = {
    Fragment: 'fragment',
    h: create
}

export default jsx