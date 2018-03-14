# Chapter 6: Exercise: Transpiling

## Objectives
* In this lab, you will write code using ES6 notation
* You will transpile code from ES6 to ES5
* Create a new node project using npm init
* Install packages locally 
* Use babel to compile code from ES6 to ES5

### Estimated Completion Time 
30 minutes


## Steps:

1. Create a directory in /WIP called `ES6`. You will do your work in this directory.

1. From this directory, create a package.json file using 
`npm init --yes` which accepts all the defaults.

1. Create an `index.html` file which includes a script reference like this:
    ``` javascript
    <script src="myHobbiesSource.js"></script>
    ```

1. Create the file `myHobbiesSource.js` - inside create an array of 3 of your hobbies. Each hobby should be represented as an object with a name, and lengthInYearsAtHobby. Similar to this sports array below, only with lengthInYearsAtHobby as a numeric value.

    ``` javascript
    const sportsArray = [
        { name: 'volleyball', duration: 'matches' },
        { name: 'baseball', duration: 'innings'},
        { name: 'hockey', duration: 'periods'}
    ];
    ```            

1. Create a function that takes in one hobby and prints it to console.log. Use ES6 backticks. It should be similar to this:
    ``` javascript
    function printSportInfo(sport) {
        console.log(` ${sport.name} is played in ${sport.duration} `)
    }
    ```

1. Now loop through the hobby array items and call the function for each item - similar to this forEach loop but for hobbies instead of sports.

    ``` javascript
    sportsArray.forEach(sport => {
        sportsInfo += (` ${sport.name} is played in ${sport.duration} 
        <br>  `);
    });
    ```

1. Run from the command line using `node myHobbiesSource`

1. Open `index.html` in Chrome and verify in the console that it works.

1. Open in IE and verify that it does not work.

1. READ ONLY (make no changes): There are several ways to "transpile" code from ES6 down to ES5. One way is using babel. It can be used several ways including from the command line. One approach would be to install babel globally. Installing globally isn't always desirable. It makes it harder to manage the versions of the tools being used and can cause developers more manual work.

    You can (and will) create a package.json and then add babel to the project. You would be able to specify the CLI tools in the node_modules directory like this: 
    
    ```./node_modules/.bin/babel source.js --out-file source-compiled.js```
    
    Starting with npm version 5.x.x there is a new tool available called `npx` which simplifies the calls to the package.

    Let's use this approach.

1. Ensure npm is up to date. Issue this command to find out the current locally installed version:
```npm -v```

1. Use this command to find out the latest version available on the Internet:
```npm view npm version```

1. READ: To update npm you can use this command: ```npm i -g npm```

1. Only if your local npm version is < 5.x use the update command in the last step.

1. Now create a `package.json` by using the `npm init` wizard from the command line. Call the package `babel-practice` - and accept all other defaults (keep hitting Return key)

1. Open the package.json and look at the dependency sections. Close the file.

1. Add the babel CLI to the new package.json dev dependencies with this command:
    ```
    npm install --save-dev babel-cli
    ```

1. Open the package.json and look at the changes in the dev dependencies section. Close the file.

1. READ: You may notice a package-lock.json file being created. This is a new approach to be able to go back to previous versions of your package.json. You can ignore this for now, but it would be checked in to your repo in the real-world.

1. Add a `preset` to the dev dependencies. Babel uses this to know how to transpile to a specific version.
    ```
    npm install babel-preset-env --save-dev
    ```

1. The last thing needed for the setup is a configuration file called `.babelrc` Create this file with this content, which specifies to use the preset we just installed.
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

1. Now, we want to execute the babel command to turn this into ES5. Recall, we could give the full path to node_modules, but this is made easier with the built in npm tool called `npx`. Issue this command:
    ```
    npx babel myHobbiesSource.js -o myHobbiesOutput.js
    ```

1. Update the index.html to use this new output version of the hobbies JS file.

1. Reload the IE browser, you should now see output in the dev tools console for both Chrome and IE.

1. Mark your work as complete. 

## BONUS
1. npx also allows you to execute tools not installed. One-off. They take a littlelonger to run because they are downloaded, ut then ou dont have to clean up your npm local repos or package.json file. Try these out:
    ```
    npx cowsay Say something

    npx happy-birthday -u YourName

    npx benny-hill
    ```

1. You can specify different browser versions with babel. Check out
https://github.com/ai/browserslist 

1. Modify the index.html to print the hobbies to the screen. You can add a function to the script which returns a string, which you use to populate the DOM.