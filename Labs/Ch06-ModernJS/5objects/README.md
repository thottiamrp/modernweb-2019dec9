# Chapter 6: Object practice

## Steps
 
1. In `/js` create a file called `hobbies.js` and do your work in this file. 
 
1. Create an array of 3 objects to define your hobbies. Each hobby should be represented as an object with a name, and `lengthInYearsAtHobby`. Scroll down for help and to continue:

    ``` javascript




















    const hobbiesArray = [
        { name: 'volleyball', lengthInYearsAtHobby: 25 },
        { name: 'cooking', lengthInYearsAtHobby: 15},
        { name: 'swimming', lengthInYearsAtHobby: 11}
    ];
    ```            

1. Create a function that takes in one hobby and prints it to console.log. Use ES6 backticks to concatenate without the plus symbol.  Use ${ }  with the variable name inside. Scroll down for help and to continue:

    ``` javascript


























    function printHobbyInfo(hobby) {
        console.log(` ${hobby.name} enjoyed for ${hobby.lengthInYearsAtHobby} `)
    }
    ```

1. Now loop through your array items and call your function for each item.    
    ``` javascript























        for (let x = 0; x < hobbiesArray.length; x++) {
            printHobbyInfo(hobbiesArray[x]);
        }

            OR

        for (let hobby of hobbiesArray) {
            printHobbyInfo(hobby);
        }
    ```

1. Run from the command line using `node myHobbies`

1. Once working mark your work as complete.

## Bonus

1. Make your way through the PracticeBonusProblems. 