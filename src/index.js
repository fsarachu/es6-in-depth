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

console.log('---- Rest Parameters ----');
console.log(`containsAll('apple', 'p', 'le') : ${containsAll('apple', 'p', 'le')}`);
console.log(`containsAll('apple', 'c', 'le') : ${containsAll('apple', 'c', 'le')}`);
console.log('');


/**
 * ---- Default Parameters ----
 * Unlike Python, default value expressions are evaluated at function call time from left to right.
 * Passing undefined is considered to be equivalent to not passing anything at all.
 * A parameter without a default implicitly defaults to undefined.
 */
function animalSentence(animals2 = "tigers", animals3 = "bears") {
    return `Lions and ${animals2} and ${animals3}! Oh my!`;
}

function animalSentenceFancy(animals2 = "tigers", animals3 = (animals2 === "bears") ? "wolves" : "bears") {
    return `Lions and ${animals2} and ${animals3}! Oh my!`;
}

console.log('---- Default parameters ----');
console.log(`animalSentence(): ${animalSentence()}`);
console.log(`animalSentence("bunnies"): ${animalSentence("bunnies")}`);
console.log(`animalSentenceFancy("bears"): ${animalSentenceFancy("bears")}`);
console.log('');


/**
 * ---- Promises ----
 */
let myFirstPromise = new Promise((resolve, reject) => {
    // We call resolve(...) when what we were doing made async successful, and reject(...) when it failed.
    // In this example, we use setTimeout(...) to simulate async code.
    // In reality, you will probably be using something like XHR or an HTML5 API.
    setTimeout(function(){
        resolve("Success!"); // Yay! Everything went well!
    }, 250);
});

myFirstPromise.then((successMessage) => {
    // successMessage is whatever we passed in the resolve(...) function above.
    // It doesn't have to be a string, but if it is only a succeed message, it probably will be.
    console.log("Yay! " + successMessage);
});