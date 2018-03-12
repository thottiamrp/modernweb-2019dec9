# Chapter 6: Exercise: ES6 Modules

## Objectives
* In this lab, you will use ES6 Modules

### Estimated Completion Time 
15 minutes

## Steps:

1. create a file called `printHobbies.js` and copy the print function you created into it - and use module.exports as shown:

    ``` javascript
    function printHobbyInfo(hobby) {
        console.log(` ${hobby.name} has been an interest for ${hobby.duration} years`)
    }

    module.exports = printHobbyInfo;
    ```

1. Create a script file called source.js that "requires" `printHobbies.js` making it available. The rest of this script is the same as before, it is where you create your array and loop through printing, but this time using the newly created module.

``` javascript
const printInfo = require('./printHobbies');

const hobbies = [
    { name: 'volleyball', duration: 20 },
    { name: 'cooking', duration: 5},
    { name: 'swimming', duration: 11}
];

for (const hobby of hobbies) {
    printInfo(hobby);
}
```

1. Very few browsers support modules, so lets use browserify. We can install it globally using:
```npm install -g browserify``` 

1. Execute this command: `browserify source.js -o bundle.js`

1. Create an `index.html` file which contains
``` <script src="bundle.js"></script> ```

1. Test your `index.html` file in Chrome and Internet Explorer. Do you see your output in the developer tools console?

1. Chrome should successfully display the data. But Internet Explorer and Firefox will not work due to the ES6 code. We will address this in the next section.    
