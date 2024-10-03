function greeting(greetingHandler, name) {
    // console.log(greetingHandler());
    greetingHandler(name);
}

// greeting('Halim mama');

const name = 'Halim mama';
// greeting(name);

const number = 45;
// greeting(number);

const numbers = [45, 54, 78];
// greeting(numbers);

const laptop = { price: 45000, brand: 'lenovo', memory: '8gb' };
// greeting(laptop);

function greetingHandler(name) {
    console.log('Good Morning', name);
}

function greetEvening(name) {
    console.log('Good Evening', name);
}

function greetNight(name) {
    console.log('Good Night', name);
}

greeting(greetingHandler, 'Tom Hanks');
greeting(greetingHandler, 'Tom Brady');
greeting(greetingHandler, 'Tom Cruise');
greeting(greetEvening, 'Tom Solaiman');
greeting(greetEvening, 'Tom Salman');
greeting(greetNight, 'Rasel');


function submitHandler() {
    console.log('submit button clicked');
}
document.getElementById('btn-submit').addEventListener('click', submitHandler)
