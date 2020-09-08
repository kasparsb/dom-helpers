function g(args, index) {
    if (index < args.length) {
        return args[index];
    }

    return undefined;
}

/**
 * eventName nav args, tas tiek padots
 */
function parseArgumentsWithEventName(args, eventName) {
    let r = {
        el: undefined,
        eventName: eventName,
        querySelector: undefined,
        cb: undefined
    }

    let i = 0;

    // Pirmais elements ir selector vai parentNode
    if (typeof g(args, i) === 'string') {
        r.el = document;
        r.querySelector = g(args, i);

        i += 1;
    }
    else {
        r.el = g(args, i);
        r.querySelector = g(args, i+1);

        i += 2;
    }

    // Pēdējais ir callback
    r.cb = g(args, i);

    return r;
}

export default parseArgumentsWithEventName