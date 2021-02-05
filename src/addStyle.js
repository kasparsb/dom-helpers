import rea from './rea';

export default function (els, props) {
    rea(els).forEach(el => {
        for (let name in props) {
            if (!props.hasOwnProperty(name)) {
                continue;
            }

            el.style[name] = props[name];
        }
    })
}