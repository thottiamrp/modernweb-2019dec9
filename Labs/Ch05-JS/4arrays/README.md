# Chapter 5: Arrays practice

## Steps
 
1. In `WIP/js` create a file called `arrays.js` and do your work in this file. 

1. Create a string array with 3 of your favorite hobbies. For help and to continue, scroll down.
    ```javascript





















    let hobbiesArray = ['coding',
    'testing',
    'listening to music'];

    ```

1. Create a function called printHobbies. It should produce the following type of output to the console (Scroll down for a hint and to continue:)
    ```
    I like 3 things: 
    I like x
    I like y
    I like z
    

























    ```

    ```javascript
    function printHobbies(passedArray) {
        console.log(`I like ${passedArray.length} things`);
        for (let index = 0; index < hobbiesArray.length; index++) {
            let element = hobbiesArray[index];
            console.log('I like ' + element);
        }  
    }
    ```

1. Now call your function passing the array you created.
   ```javascript
   printHobbies(hobbiesArray);
    ```

1. Mark your work as complete.

## Bonus

1. Create an array of objects. Each object has a sport name and a duration. Loop through and print so that you have output similar to this:
    ```
    Baseball is played in innings
    Hockey is played in periods
    ```