// Rest parameters
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
