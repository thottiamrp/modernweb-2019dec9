
// let soughtAfterElement = someArray.doSomething ( 
//     function(currentElementThatIsBeingEvaluated) {
//         return (currentElementThatIsBeingEvaluated.startsWith('J'))
//     }
// );




var numbers = new Array(1, 2, 3, 4, 5);
console.log('Numbers length ' + numbers.length);

const simpleNameArray = ['Adam', 'Judy', 'Cody'];
const ages = new Array(45, 41, 1);

let jName = simpleNameArray.find ( 
    function(currentElementThatIsBeingEvaluated) {
        return (currentElementThatIsBeingEvaluated.startsWith('J'))
    }
);

console.log(`Found ${jName}`);

console.log(simpleNameArray[1] + ' is ' +
    ages[1] + ' years old');

console.log(`${simpleNameArray[1]} is ${ages[1]} years old`);

console.log(simpleNameArray.join('|'));

var output = '';
for (var index = 0; index < simpleNameArray.length; index++) {
    var element = simpleNameArray[index];
    output += element + ' ';
}
console.log('Loop output: ' + output);


const person = {
    name: "Adam",
    age: 45
}

const oneArray = [1, 2, 3];
const secondArray = [1, 2, 3];

console.log(oneArray == secondArray)




var letters = new Array("q", "w", "e", "r", "t", "y", "q");
console.log('An array of letters: ' + letters);
console.log('indexOf w: ' + letters.indexOf("w")); // prints 1
console.log('lastIndexOf q: ' + letters.lastIndexOf("q")); // prints 6

for (var x = 0; x < letters.length; x++) {
    console.log('Math.random()=' + Math.random());
}


var letters2 = new Array("h", "e", "l", "l", "o");
console.log('<br/>Join array elements to a string');
console.log('<br/>');
console.log(letters2.join());
console.log('<br/>');
console.log(letters2.join('-'));

console.log('<br/>');

console.log('<br/>Sorting array...');
console.log(letters);
console.log('<br/>');
console.log(letters.sort());
console.log('<br/>');
console.log(letters);

console.log('Array sort()');
var scores = [1, 10, 21, 2];
scores.sort();
console.log(scores);
console.log('');

console.log('Array push() and pop()');
const bands = [];

bands.push('The Beatles');
bands.push('Aerosmith');
bands.push('The Temptations');

console.log(bands); // ["The Beatles", "Aerosmith", "The Temptations"]

const aBand = bands.pop()

console.log(aBand); // "The Temptations"
console.log(bands); // ["The Beatles", "Aerosmith"]
console.log('');

console.log('Array.find()');
const haystack = ['Apple', 'banana', 'Cherry'];
const needle = haystack.find(function(currentValue) {
    return currentValue.toUpperCase().startsWith('B');
});

console.log('Needle is: ' + needle);
console.log('');

console.log('Array sort()');
const values = ['a', 'b', 'c', 'd', 'e'];

console.log(values.slice()); // ["a", "b", "c", "d", "e"]
console.log(values.slice(1)); // ["b", "c", "d", "e"]
console.log(values.slice(1, 3)); // ["b", "c"]
console.log(values.slice(-2)); // ["d", "e"]
console.log(values.slice(0, -3)); // ["a", "b"]


