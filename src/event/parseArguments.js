function a(args, index) {
    return index < args.length ? args[index] : undefined;
}

function astring(args, index) {
    return typeof a(args, index) === 'string';
}

function afunction(args, index) {
    return typeof a(args, index) === 'function';
}

/**
 * Parse arguments
 *
 * These are possible signatures
 *
 * First case is when argument definedEventName is undefined
 *
 * 1.1 on(domNode, 'click', '.selector', function(){})
 * 1.2 on(domNode, 'click', function(){})
 * 1.3 on('click', '.selectr', function(){})
 * 1.4 on('click', function(){})
 *
 * Signatures when argument definedEventName is defined
 * In this case asume, that there is no eventName in arguments signature
 *
 * 2.1 click(domNode, '.selector', function(){})
 * 2.2 click(domNode, function(){})
 * 2.3 click('.selector', function(){})
 * 2.4 click(function(){})
 */

export default function (args, definedEventName) {
    let r = {
        el: undefined,
        eventName: undefined,
        querySelector: undefined,
        cb: undefined
    }

    // 2.4
    // Ir padots definedEventName un args ir tikai callback
    if (afunction(args, 0) && definedEventName) {
        r.el = document;
        r.cb = a(args, 0);
        r.eventName = definedEventName;

        return r;
    }

    let i = 0;

    // DOM elements
    // 1.3, 1.4, 2.3
    if (astring(args, i)) {
        r.el = document;
    }
    // 1.1, 1.2, 2.1, 2.2
    else {
        r.el = a(args, i);
        i = i + 1;
    }

    // Event
    if (definedEventName) {
        r.eventName = definedEventName;
    }
    else {
        r.eventName = a(args, i);
        i = i + 1;
    }

    // Selector un Callback ir pēdējie 1 vai 2 argumenti
    if (astring(args, i)) {
        r.querySelector = a(args, i);
        r.cb = a(args, i+1);
    }
    else {
        r.cb = a(args, i);
    }

    return r;
}