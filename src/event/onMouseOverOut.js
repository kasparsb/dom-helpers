import on from './on';
import pe from '../pe';

/**
 * Lai mouseover un mouseout izpildās tikai vienu reizi, kad
 * ieiet elementā un ieiziet no elementa
 * ir mouseleve un mouseneter, bet tie does not bubble
 * attiecīgi nevar uztaisīt delegated (jāliek pa tiešo uz dom elementa)
 */
export default function(p1, p2, p3) {
    let parentNode, querySelector, callbacks;

    if (typeof p1 === 'string') {
        parentNode = document;
        querySelector = p1;
        callbacks = p2;
    }
    else {
        parentNode = pe(p1);
        querySelector = p2;
        callbacks = p3
    }

    let mt = 0;
    let mr = 0;
    let wasMouseOver = false;
    let wasMouseOut = false;

    on(parentNode, 'mouseover', querySelector, (ev, el) => {
        clearTimeout(mt);
        mr = setTimeout(() => {
            if (!wasMouseOver) {
                callbacks.mouseover(ev, el)
            }
            wasMouseOver = true;
            wasMouseOut = false
        }, 5)
    })
    on(parentNode, 'mouseout', querySelector, (ev, el) => {
        clearTimeout(mr);
        mt = setTimeout(() => {
            if (!wasMouseOut) {
                callbacks.mouseout(ev, el)
            }
            wasMouseOut = true;
            wasMouseOver = false;
        }, 5)
    })
}