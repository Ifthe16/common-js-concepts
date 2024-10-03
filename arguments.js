//  array like object
function sum(a, b, c) {
    // console.log(arguments);
    const args = [...arguments];
    console.log(args);
    console.log(typeof arguments);
    console.log(arguments[4]);

    const result = a + b + c;
    return result;
}
// console.log(arguments);

const total = sum(45, 89, 12, 45, 98, 56);
console.log(total);

console.log(typeof sum);
console.log(sum.length);