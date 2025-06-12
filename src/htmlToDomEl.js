import next from './next';

export default function (html) {
    // Šis veido DOM document
    let newEl = (new DOMParser()).parseFromString(html, 'text/html')

    /**
     * Atgriežam visas dom nodes
     * vienīgi filtrējam arā visas kas nav ELEMENT_NODE
     * lai nav teksta nodes
     *
     * atgriežam fragment, lai nav jāstrādā ar masīviem
     */
    let fragment = document.createDocumentFragment();

    for (let i = 0; i < newEl.body.childNodes.length; i++) {
        fragment.appendChild(newEl.body.childNodes[i])
    }

    return fragment;
}