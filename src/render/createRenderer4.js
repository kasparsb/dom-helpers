
import startCollectingRefs from './startCollectingRefs';


export default function(create, update) {
    return (function() {


        // Reference to redered dom element from renderFunction
        let el;
        let isFirst = true;
        let refs = {};
        let funcs = [];


        // This is created function
        return function() {


            if (isFirst) {
                isFirst = false;

                /**
                 * Šeit jsx pasakam, lai piefiskē visus elementus, kuriem
                 * ir attribūts ref
                 * veidosies key -> value, kur key ir ref vērtība un value būs el,
                 * kuram uzlikts ref
                 */
                startCollectingRefs.startCollect();
                el = create.apply(this, [arguments[0]]);
                refs = startCollectingRefs.getRefs()
                funcs = startCollectingRefs.getFuncs()
                console.log('collected refs');
                console.log(refs);
                console.log(funcs);
                startCollectingRefs.stopCollect();

                // vēl vajag piefiksēt visus child elemetus, kur ir custom funkcijas
            }
            else {
                update.apply(this, [el, refs, arguments[0]]);

                // un šeit attiecīgi visām child elementu, kuri ir funkcijas izsaukt update
            }


            // Ja ir uzģenerēts tukšs dom elements, tad liekam placeholder elementu, lai
            // saglabājas reference, kuru pēc tam var replace ar citu elementu
            // if (!newEl) {
            //     newEl = document.createTextNode('');
            // }

            return el;
        }

    })()
}