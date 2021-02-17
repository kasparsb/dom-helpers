import re from './re';
import qa from './qa';

export default function(selectEl, value) {
    return [...qa(re(selectEl), 'option')].find(
        // Atgriežam find cb atkarībā no padotā/nepadotā value
        (() => typeof value == 'undefined'
            // Ja nav padots value, tad atgriežam cb, kurš meklē selected
            ? el => el.selected
            // pretējā gadījumā cb, kurš meklē pēc value
            : el => el.value == value
        )()
    )
}