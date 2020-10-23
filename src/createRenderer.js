import replace from '../src/replace';

/**
 * Creates function which accpets and stores rendered dom element from renderFunction
 * Return function which can be called to invoke renderFunction. New dom elements, which is
 * recived from renderFunction is replaced with previos dom element
 */
export default function(renderFunction) {
    return (function(renderFunction) {

        // Reference to redered dom element from renderFunction
        let el;

        // This is created function
        return function() {
            // Render element
            let newEl = renderFunction.apply(this, arguments);

            // Ja ir uzģenerēts tukšs dom elements, tad liekam placeholder elementu, lai
            // saglabājas reference, kuru pēc tam var replace ar citu elementu
            if (!newEl) {
                //newEl = <i style={{display:'none'}}></i>
                newEl = document.createTextNode('');
            }

            // Ja elements jau eksistē, tad replace to ar jauno elementu
            el = replace(el, newEl);

            return el;
        }

    })(renderFunction)
}