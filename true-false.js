/* 
Truthy:
1. true
2. any number (+ve, -ve) will be truthy other than 0
3. any string other than empty string
4. '0', 'false'
5. {}
6. []

Falsy:
1. false
2. 0
3. '' (empty string)
4. undefined
5. null
6. NaN
*/
// const x = false;
// const x = 4;
// const x = -4;
// const x = 0;
// const x = 'Solaiman';
// const x = 's';
// const x = '';
// const x = ' ';
// const x = '0';
// const x = 'false';
// let x;
// console.log(x);
// let x = null;
// let x = {};
// let x = {a:5, b:56};
// let x = [];
// let x = [5, 6];
let x = NaN;

if (x) {
    console.log('value of x is truthy');
}
else {
    console.log('value of x is falsy');
}

// optional
// check falsy
// const y = '';
const y = null;
if (!y) {
    console.log('value is falsy');
}

// check true
// const z = ' ';
// const z = 50;
const z = { class: 9 };
if (!!z) {
    console.log('value is truthy');
}
