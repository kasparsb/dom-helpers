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

    // Tikko appendChildNode uz fragment, tā tas pazūd no newEl.body.childNodes un izmainās length
    while (newEl.body.childNodes.length > 0) {
        fragment.appendChild(newEl.body.childNodes[0]);
    }

    return fragment;
}