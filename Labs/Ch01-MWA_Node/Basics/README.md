# Chapter 1: Practice with Basics of HTML, CSS, and JS
## Objectives
* Create an HTML document with minimal styling and dynamic behavior


## Overview:
You will create an html document using VSCode HTML Snippets, and add basic styling and basic JavaScript.

Follow the steps, and if you need additional help you can refer to the slides, previous demos, or the `solution` folder.

## Steps:

### Create a basic page with VSCode


1. In the `WIP` folder, create a file called `index.html`. You can create this folder by right-clicking the `WIP` folder, and choosing New File.

1. In the empty `index.html` file, type `html` and pause. You should see a menu with options for html templates. Choose the one that is `html:5`. We will review the structure of this file in upcoming chapters.

1. In `<head>` look for `<title>` modify it's content so that it looks like this:
    ```html
    <title>Basics of HTML, CSS and JavaScript</title>
    ```

    ### Add some JavaScript

1. After `<title>`, and before the closing `</head>` tag, add opening and closing `<script></script>` tags.

1. Type in the following code, notice as you type, the editor offers autocompletion.

    ```html
        <script>
            function init() {
                document.getElementById("name").innerHTML = 'Put your name in here';
            }
        </script>
    ```            

1. Modify the `<body>` start tag as shown. It will trigger the function, after the rest of the page has been loaded.
    ```html
    <body onload="init()">
    ```

1. In `<body>`, add this line of code, 
    ```html
    <div id="name"></div>
    ```
    Notice the div element has an attribute of id, with a value of name. this is what the JavaScript will target.

1. Save and then open the file in the Chrome browser and check that your name is displayed. You can right-click the html file and choose open in browser, or use the shortcut ALT-B (i you have installed the Open In Browser extension). The first time you use `Open in Browser` you will be prompted for which browser to set as the default.

1. Is the page displaying your name as expected? 

    If not, are there any errors? You can find out by opening the browser dev tools. Right click in the browser and choose Inspect. The brings up the dev tools and may point to possible errors including which line number to focus in on. 

    Make any necessary fixes - make sure your name is displayed before you move on. Ask fellow students or your instructor for help if needed. (answering questions is a great way to learn!)

1. If you did not get a chance to see and correct an error, add one now. Change your function to be named `init2`. Reload the page, and open the browser dev tools (see details in the last step) to see the error message.  Fix the problem and make sure your site is working, then move to the next step.

    ### Add some style with CSS

1. In the `<head>`, add opening and closing `<style>` tags. You can copy the following code, or if typing - see how VSCode recommends autocompletion.

    ```html
    <style>
        div {
            width: 300px;
            padding: 10px;
            border: 1px solid purple;
            background-color: grey;
            color: purple
        }
    </style>
    ```

1. Go back to the browser and reload to see your changes. Your name should now be in a grey box with a purple border.

1. Mark your work as complete in the class spreadsheet.
http://moxie.pro/201mssheet 

1. If you are done before others, continue to the Bonus.

## Bonus:

1. Try adjusting values for the CSS colors and sizes and refreshing the browser.

1. Look at the slides and try to create a JavaScript object with your name and email.
In the init() function, use the object to set the name and email.

1. In init() add to the object to include an array of your hobbies. 
    1. In the HTML create a new div called hobbies.
    1. In `init()` create a string to hold a `<ul>`, and `<li>` for each of the  hobbies. Loop through the array adding the list items to the string. 
for each hobby. 
    1. Use `document.getElementById` to select the hobbies `div`, and `innerHTML` to populate the `<div>` with the created string.
    1. Style the hobbies div font to be bold and the color of your choice.


