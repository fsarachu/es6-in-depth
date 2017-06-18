/**
 * ---- Rest Parameters ----
 * Only the last parameter of a function may be marked as a rest parameter.
 * In a call, the parameters before the rest parameter are filled as usual.
 * Any “extra” arguments are put into an array and assigned to the rest parameter.
 * If there are no extra arguments, the rest parameter will simply be an empty array;
 * the rest parameter will never be undefined.
 */
function containsAll(haystack, ...needles) {
    for (let needle of needles) {
        if (haystack.indexOf(needle) === -1) {
            return false;
        }
    }
    return true;
}

console.log(`containsAll('apple', 'p', 'le') : ${containsAll('apple', 'p', 'le')}`);
console.log(`containsAll('apple', 'c', 'le') : ${containsAll('apple', 'c', 'le')}`);
