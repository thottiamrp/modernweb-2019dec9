# Chapter 1: Practice with Basics of HTML, CSS, and JS
## Objectives
* Create an HTML document with minimal styling and dynamic behavior

### Estimated Completion Time 
20 minutes

## Overview:
You will create an html document using VSCode HTML Snippets, and add basic styling and basic JavaScript.

Follow the steps, and if you need additional help you can refer to the slides, previous demos, or the `solution` folder.

## Steps:

1. In the `WIP` folder, create a folder called `Ch01-Practice`. You can create this folder by right-clicking the `WIP` folder, and choosing New Folder.

1. Create a file in the new folder. You can right-click the `Ch01-Practice` folder and choose New File. Call the file `basics.html`.  

1. In the empty file, type `html` and pause. You should see a menu with options for html templates. Choose the one that is `html:5`. We will review the structure of this file in upcoming chapters.

1. In `<head>` and then in `<title>` modify it to loo like this:
    ```html
    <title>Basics of HTML, CSS and JavaScript</title>
    ```
1. After title, and before the closing `</head>` tag, add an opening and closing `<script>` tag and write a function called init(). In the function use `document.getElementByID` to select the name `div`, and `innerHTML` to populate the `<div>` with YOUR name.

    Try typing the following code, notice as you type, the editor offers autocompletion.

    ```html
    <script>
            function init() {
                document.getElementById("name").innerHTML = 'Put your name in here';
            }
        </script>
    ```            

1. In `<body>`, add this line of code, notice the div element has an attribute of name, this is what teh JavaScript will target with your name.
    ```html
    <div id="name"></div>
    ```

1. Modify the `<body>` tag to add an attribute `onload` and set it to call the `init()` function. This is what will trigger the function. after the rest of the code has been loaded.
    ```html
    <body onload="init()">
    ```

1. Open the file in the browser and check that your name is displayed. You can right-click the html file and choose open in browser, or use the shortcut ALT-B. Make any necessary fixes - make sure your name is displayed befor you move on.

    If you need help ask your instructor or fellow students.

1. In the `<head>`, add opening and closing `<style>` tags.
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

1. Mark your work as complete. If you are done before others, continue to the Bonus.

## Bonus:

1. Try adjusting values for the CSS colors and sizes and refreshign the browser.

1. Look at the slides and try to create a JavaScript object with your name and email.
In the init() function, use the object to set the name and email.

1. In init() add to the object to include an array of your hobbies. 
    1. In the HTML create a new div called hobbies.
    1. In `init()` create a string to hold a `<ul>`, and `<li>` for each of the  hobbies. Loop through the array adding the list items to the string. 
for each hobby. 
    1. Use `document.getElementByID` to select the hobbies `div`, and `innerHTML` to populate the `<div>` with the created string.
    1. Style the hobbies div font to be bold and the color of your choice.


