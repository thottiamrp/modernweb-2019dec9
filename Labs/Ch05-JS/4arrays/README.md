# Chapter 5: Arrays practice

## Steps
 
1. Create a string array with 3 of your favorite hobbies.

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

   printHobbies(hobbiesArray);

