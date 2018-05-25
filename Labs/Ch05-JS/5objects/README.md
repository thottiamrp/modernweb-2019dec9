# Chapter 5: Object practice

## Steps
 
1. In `WIP/js` create a file called `hobbies.js` and do your work in this file. 
 
1. Create an array of 3 objects to define your hobbies. Each hobby should be represented as an object with a name, and `lengthInYearsAtHobby`. Scroll down for help and to continue:

    ``` javascript




















    const hobbiesArray = [
        { name: 'volleyball', lengthInYearsAtHobby: 25 },
        { name: 'cooking', lengthInYearsAtHobby: 15},
        { name: 'swimming', lengthInYearsAtHobby: 11}
    ];
    ```            

1. Create a function that takes in one hobby and prints it to console.log. Use ES6 backticks. Check out how cool backticks are!  you can concatenate without the plus symbol.  It uses ${ }  with the variable name inside. Your work will be similar to this example:
    ``` javascript
    function printSportInfo(sport) {
        console.log(` ${sport.name} is played in ${sport.duration} `)
    }
    ```

1. Now loop through your array items and call your function for each item.     ``` javascript
        printSportInfo(sportsArray[someCounter]);
    ```

1. Run from the command line using `node myHobbies`

1. Once working mark your work as complete.

##Bonus

1. READ: The `Array.prototype.forEach` function takes an anonymous function which iterates over the array allowing you to do something with each element. It is one of the examples of using the `Array.prototype` functions to not need to write a for loop on your own, just to iterate over every element. Most of the `Array.prototype` functions process the array using the callback function that you supply.  

    Now with ES6 notation, we can use an arrow function for specifying the callback function. View the following example used in the /Demos section. Notice how a local variable is set for sport, to represent the single sport being processed during that iteration of the loop - processing each element of the `sportsArray.` 

    ``` javascript
     sportsArray.forEach(sport => {
        console.log(`  ${sport.name} is played in ${sport.duration} `);
    });
    ```

1. Now, you will use the `forEach` method with your own array. Create a `logHobbies` function with no inputs which uses the `forEach` method for looping, and prints a message using ES6 backticks with string template references for the properties. 

   Example output:

   volleyball: A hobby for 25 years

1. After the function definition, add a call to the `logHobbies` function.

1. Run your .js file from the command line using `node myHobbies` - be sure you are in the correct directory! Recall - you can right-click files or directories and open in the integrated terminal window to the correct location.

1. Confirm the script works - that you see the output in the console. ES6 is supported in Node.


1. Create an object literal to represent one band:
    ```javascript
    let band1 = {
            name : "Pink Floyd",
            city : "London" ,
            country : "England",
            yearFormed : 1965,
            genres : ["Progressive rock", "psychedelic rock", "art rock"]
        }
    band1.genres = new Array("Progressive rock2", "psychedelic rock2", "art rock2");
    ```

1. Create another object for a band of your choice. Use the new Object() notation and then add the same properties using the dot notation.

1. Create a bands array and add the two objects.

1. Create a function to process this array. 
