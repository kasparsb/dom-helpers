function g(args, index) {
    if (index < args.length) {
        return args[index];
    }

    return undefined;
}

function parseArguments(args) {
    let r = {
        el: undefined,
        eventName: undefined,
        querySelector: undefined,
        cb: undefined
    }

    let i = 0;

    // Pirmie divi argumenti el vai eventName
    if (typeof g(args, i) === 'string') {
        r.el = document;
        r.eventName = g(args, i);

        i += 1;
    }
    else {
        r.el = g(args, i);
        r.eventName = g(args, i+1);

        i += 2;
    }

    // Nākošie divi, querySelector vai callback
    if (typeof g(args, i) === 'string') {
        r.querySelector = g(args, i);
        r.cb = g(args, i+1);

        i += 2;
    }
    else {
        r.cb = g(args, i);

        i += 1;
    }

    return r;
}

export default parseArguments