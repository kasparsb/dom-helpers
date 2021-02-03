import re from './re';
/**
 * Find element index in its parent
 * For example what is index of li item in ul
 */
export default function(el) {
    el = re(el);

    if (!el) {
        return;
    }

    // Table row, has attribute rowIndex
    switch (el.tagName.toUpperCase()) {
        case 'TR': return el.rowIndex;
    }

    if (!el.parentNode) {
        return;
    }

    let child, index = 0;
    // Search amongs parent childNodes
    for (let i = 0; i < el.parentNode.childNodes.length; i++) {
        child = el.parentNode.childNodes[i];

        // Accept only element nodes. Exclude nodes like text and so on
        if (child.nodeType != Node.ELEMENT_NODE) {
            continue;
        }

        if (child === el) {
            return index;
        }

        index++;
    }
}