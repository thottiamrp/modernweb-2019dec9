
let hobbiesArray = ['coding',
    'testing',
    'listening to music'];

function printHobbies(passedArray) {
    console.log(`I like ${passedArray.length} things`);
    for (let index = 0; index < hobbiesArray.length; index++) {
        let element = hobbiesArray[index];
        console.log('I like ' + element);
    }  
}

printHobbies(hobbiesArray);
