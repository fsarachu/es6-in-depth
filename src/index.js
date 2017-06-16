import "babel-polyfill";

function* myGenerator() {
    yield 'h';
    yield 'e';
    yield 'l';
    yield 'l';
    yield 'o';
}

for (let obj of myGenerator()) {
    console.log(obj);
}
