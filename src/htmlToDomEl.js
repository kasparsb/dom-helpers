import next from './next';

export default function (html) {
    // Šis veido DOM document
    let newEl = (new DOMParser()).parseFromString(html, 'text/html')

    /**
     * Ņemam tikai pirmo child no body
     * bet jāskatās, lai tas nav textNode
     * ir jāmeklē pirmā īstā node
     *
     * TODO bet vai tomēr nevajag arī ar textNode korekti strādāt?
     * problēma tā, ka ar textNode nevar strādāt kā ar domNode
     */
    // let firstNode = newEl.body.firstChild;
    // if (firstNode.nodeType !== Node.ELEMENT_NODE) {
    //     firstNode = next(firstNode);
    // }

    // return firstNode;


    /**
     * Atgriežam visas dom nodes
     * vienīgi filtrējam arā visas kas nav ELEMENT_NODE
     * lai nav teksta nodes
     *
     * atgriežam fragment, lai nav jāstrādā ar masīviem
     */
    let fragment = document.createDocumentFragment();

    for (let i = 0; i < newEl.body.children.length; i++) {
        let el = newEl.body.children[i];
        if (el.nodeType === Node.ELEMENT_NODE) {
            fragment.appendChild(el)
        }
    }

    return fragment;
}