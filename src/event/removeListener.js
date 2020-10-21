export default function(el, eventName, eventHandler) {
    el.removeEventListener(eventName, eventHandler);
}