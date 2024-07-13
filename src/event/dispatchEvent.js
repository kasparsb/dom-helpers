import re from '../re';

function dispatchEvent(el, eventName) {
    el = re(el);

    el.dispatchEvent(new Event(eventName, {
        bubbles: true
    }));
}

export default dispatchEvent