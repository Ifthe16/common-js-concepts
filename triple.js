/* 
always use ===
equal comparison does not work for non-primitive 
*/


// const first = 2;
// const first = 1;
// const first = 0;
// const first = '0';
// const first = {};
// const first = {x:5};
// const first = [];
const first = [45, 54, 98];

// const second = 2;
// const second = '2';
// const second = true;
// const second = false;
// const second = {};
// const second = {x:5};
// const second = [];
// const second = first;
const second = [45, 54, 98];

if (first == second) {
    console.log('values are equal');
}
else {
    console.log('values are not equal');
}

// type coercion
// type conversion
// type casting

