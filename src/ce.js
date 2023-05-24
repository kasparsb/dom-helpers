import jsx from './jsx';

/**
 * Wrapper priekš jsx.h
 */
export default function() {
    return jsx.h.apply(jsx, [...arguments]);
}