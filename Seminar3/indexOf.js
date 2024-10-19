const array = [1, 2, 3, NaN, 4];

const elementIndex = array.indexOf(5);
const indexOf = elementIndex !== -1 ? elementIndex : 'Not found';

console.log(indexOf);