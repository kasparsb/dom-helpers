import isPromise from './isPromise';
import htmlToDomEl from './htmlToDomEl';

function stringOrDomNode(stringOrDomNode) {
    if (typeof stringOrDomNode === 'string') {
        // ja string, tad parsējam par Node
        return htmlToDomEl(stringOrDomNode)
    }

    return stringOrDomNode
}

/**
 * maybeEl is promise, string or dom element
 * functions ensures that returned value is alweays dom node
 * if promise then resolve dom node from promiese
 * if string then create dom nodes from string
 */
function ensureDomNode(maybeDomNode) {
    if (isPromise(maybeDomNode)) {
        // Promise gadījumā atgriežam arī promise
        return new Promise((resolve, reject) => {
            maybeDomNode.then(newHtml => {
                /**
                 * Pārbaudām vai ir Response objekts
                 * tas nozīmē, ka bija padots fetch promise
                 */
                if (newHtml instanceof Response) {
                    newHtml.text().then(newHtml => resolve(stringOrDomNode(newHtml)))
                }
                // Te tiek pieņemts, ka ir jau response string
                else {
                    resolve(stringOrDomNode(newHtml))
                }
            })
        })
    }

    return stringOrDomNode(maybeDomNode)
}

export default ensureDomNode