// return
function kitchen() {
    let roast = 0;
    return function () {
        roast++;
        return roast;
    }
}

const firstServer = kitchen();
console.log(firstServer());
console.log(firstServer());
console.log(firstServer());
console.log(firstServer());

// callback 
function init() {
    let name = 'Mozilla';
    function displayName() {
        console.log(name);
    }
    displayName();
}

init();