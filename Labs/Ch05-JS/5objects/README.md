# Chapter 3C: Object practice

## Steps
 

1. Continue with your practice page. 

1. In a file called myHobbies.js - create an array of 3 of your hobbies. Each hobby should be represented as an object with a name, and lengthInYearsAtHobby. Similar to the following sports array, only with lengthInYearsAtHobby as a numeric value.

    ``` javascript
    const sportsArray = [
        { name: 'volleyball', duration: 'matches' },
        { name: 'baseball', duration: 'innings'},
        { name: 'hockey', duration: 'periods'}
    ];
    ```            

1. Create a function that takes in one hobby and prints it to console.log. Use ES6 backticks. Check out how cool backticks are!  you can concatenate without the plus symbol.  It uses ${ }  with the variable name inside.
Your work will be similar to this example
    ``` javascript
    function printSportInfo(sport) {
        console.log(` ${sport.name} is played in ${sport.duration} `)
    }
    ```

1. Now loop through your array items and call your function for each item.     ``` javascript
        printSportInfo(sportsArray[someCounter]);
    ```

1. Run from the command line using `node myHobbies`

1. Create an object literal to represent one band:
    ```javascript
    var band1 = {
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

1. Create a function to process this array. Update a targeted div element to create a multi-level list.  An unordered list for each band, and within the band, an ordered list for the genres.
