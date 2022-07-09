export default function() {
    return window.pageXOffset || (document.documentElement || document.body.parentNode || document.body).scrollLeft
}
