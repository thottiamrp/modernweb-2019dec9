# Chapter 6: Exercise: Transpiling (UPDATED)

## Objectives
* In this lab, you will write code using ES6 notation
* Create a new node project using npm init
* Install packages locally 
* You will transpile code from ES6 to ES5
* Use babel to compile code from ES6 to ES5
* If you need additional help, you can refer to the appropriate `/Demos` directory. 

### Estimated Completion Time 
30 minutes


## Steps:

1. Create a directory in `/WIP` called `ES6`. You will do your work in this directory in creating a new project.

1. To manage our new project's dependencies, including for babel, we will create a `package.json` by using the `npm init` wizard from the command line. Be sure to be within `/WIP/ES6` when you execute this command 
    ```
    npm init --yes
    ``` 
    
    The `--yes`, or `-y` accepts all the defaults from the wizard.

1. Create a `src` directory for scripts, and to this directory add a new file `myHobbies.js`.

1. Inside `myHobbies.js` create a `hobbiesArray` with 3 hobby objects. Each hobby should be represented as an object with properties for `name` and `lengthInYearsAtHobby`.   

1. READ: The `Array.prototype.forEach` function takes an anonymous function which iterates over the array allowing you to do something with each element. It is one of the examples of using the `Array.prototype` functions to not need to write a for loop on your own, just to iterate over every element. Most of the `Array.prototype` fuctions process the array using the callback function that you supply.  

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

1. Create an `index.html` file in the directory of `/WIP/ES6` which includes a script reference like this:
    ``` javascript
    <script src="src/myHobbiesSource.js"></script>
    ```

1. Open `index.html` in Chrome and verify in the console that it works.

1. Open in IE11 and verify that it does not work. It does not understand the ES6 syntax.

1. READ ONLY (make no changes): There are several ways to "transpile" code from ES6 down to ES5. One way is using babel. It can be used several ways including from the command line. One approach would be to install babel globally. Installing globally isn't always desirable. It makes it harder to manage the versions of the tools being used and can cause developers more manual work.

   
1. Open the `package.json` and look at the dependency sections. It's currently empty. Close the file.

1. Add the babel CLI to the new package.json dev dependencies with this command:
    ```
    npm install --save-dev babel-cli
    ```

    a shortcut for `--save-dev` is

    ```
    npm install -D babel-cli
    ```

1. Open the `package.json` and look at the new entries in the dev dependencies section. Close the file.

1. READ: You may notice a `package-lock.json` file being created. This is a new approach to be able to go back to previous versions of your package.json. You can ignore this for now, but it could be checked in to your repo in the real-world. (https://docs.npmjs.com/files/package-lock.json)

1. Add a `babel-preset-env` to the dev dependencies. Babel uses this to know how to transpile to a specific version.
    ```
    npm install babel-preset-env -D
    ```

1. The last thing needed for the setup is a configuration file called `.babelrc`. Create this file in your main project directory - at the same level as your `package.json` file. In this file, add this content, which specifies to use the preset we just installed.
    ```
    {
    "presets": [
        ["env", {
        "targets": {
            "browsers": [
            "Chrome >= 52",
            "FireFox >= 44",
            "Safari >= 7",
            "Explorer 11",
            "last 4 Edge versions"
            ]
        },
        "useBuiltIns": true
        }]
    ] 
    }
    ```

1. READ (take no action): we want to execute the babel command to turn our ES6 code into ES5. 

    Because you have installed `babel` into node_modules, you could specify the CLI tool in the node_modules directory like this: 
    
    ```
    ./node_modules/.bin/babel src --out-dir dist
    ```
    
    BUT starting with npm version 5.0 there is a new tool available called `npx` which simplifies the calls from the command line to the package to the following:
    ```
    npx babel src --out-dir dist
    ```

    The `npx` command will look in the node_modules directory, if not there, it looks globally, if not there, it will temporarily download the program, execute it, then delete it.

1. Ensure npm is up to date so that we can use npx. Issue this command to find out the current locally installed version: ```npm -v```

    If it is at least 5.0 you can use npx. If not, you can update npm it to the latest version using ```npm i -g npm```

1. From the project root directory, (same as package.json) - issue this command to compile the entire src directory and output the contents to a /dist directory:
    ```
   npx babel src --presets babel-preset-env --out-dir dist
    ```

1. Look in the `/dist` directory at the transpiled file. It should now be using ES5 type concatenation instead of backticks and not be using the arrow function.

1. Update the `index.html` to use this new `/dist/myHobbies.js` version of the hobbies JS file.

1. Reload the IE browser, you should now see output in the dev tools console for both Chrome and IE.

1. Let's add the use of babel in the package.json `build` script so that it is easily repeatable and part of our development build process. 

    Find the location of the existing `"scripts"` property in `package.json`. You may already have a property there, for example for `test`. 
    
    You can have more than one script - as the value is an object, it would need to be comma separated.

    We are not using test yet, you can remove this entry and replace it with `build` as shown. 
    ```
    "scripts": {
        "build": "babel src --watch --presets babel-preset-env --out-dir dist"
    },
    ```
    Notice you do not need to include the path to `node_modules` - it will be found as part of npm running the script.

  
1. The `--watch` indicates to watch for changes in the src directory, and keep transpiling whenever a file is added or changed.

1. Start the build process using the command: `npm run build`. Notice that your terminal window does not retun to the prompt because it is listening for changes to your `src` directory. Keep this running as you are about to add more code.

1. Modify your html page to create a `div` to hold the hobbies, and add JavaScript to call a function to update the div.
    ```
    <div id="hobbiesInfo"></div>

    <script>document.getElementById("hobbiesInfo").innerHTML=returnHobbiesHTML()</script>  
    ```

1. In `src/myHobbies.js`, write the `returnHobbiesHTML` function  file to return a string, which includes HTML tags such as `<br />` or `<li>`. You can use an approach similar to this using ES6 backticks - but be sure to update the code if you copy it to use. 

    ```javascript
    function returnSportsHTML() {
        let sportsInfo = '';
        sportsArray.forEach(sport => {
            sportsInfo += (` ${sport.name} is played in ${sport.duration} <br /> `);
        });

        return sportsInfo;
    }
    ```

1. When you save the JS file, notice the console indicating that the dist folderis updated. 

1. Test in Chrome and IE. When it is working, mark your work as complete. 

## BONUS

1. Add the functionality to display the hobbies in a table. Using backticks makes it easier to create html in JS and use classes. 

1. Add a style attribute to the table to add styling. 

1. npx also allows you to execute tools not installed. One-off. They take a littlelonger to run because they are downloaded, but then you don't have to clean up your npm local repos or package.json file. Try these out:
    ```
    npx cowsay Say something

    npx happy-birthday -u YourName

    npx benny-hill
    ```

1. You can specify different browser versions with babel. Check out
https://github.com/ai/browserslist 


1. You can look at the docs on `package.json` https://docs.npmjs.com/getting-started/using-a-package.json

1. Read over the documentation for `Arrays.prototype` there are many useful functions for processing data. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype
