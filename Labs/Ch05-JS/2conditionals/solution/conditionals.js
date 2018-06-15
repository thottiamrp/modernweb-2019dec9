let numOne = 1;
let stringOne = '1';

console.log('double ==', numOne == stringOne);

console.log('triple ===', numOne === stringOne);

let myMusician = {name: 'Les', band: 'Primus'};

function changeBand(musician) {
    musician.band = 'Oysterhead';
}

console.log(myMusician);
changeBand(myMusician);
console.log('*******');
console.log(myMusician);

function changeName(name) {
    name = 'Mr.' + name;
    console.log('IN FUNCTION: ' + name)
}

changeName(myMusician.name);
console.log('AFTER FUNCTION: ' + myMusician.name)
