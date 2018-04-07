# Chapter 3: Review of Basics
## Objectives
* Create an HTML document with styling and dynamic behavior

### Estimated Completion Time 
20 minutes

## Overview:
You will create an html document using VSCode HTML Snippets, and add styling and JavaScript.

Follow the steps, and if you need additional help yo can refer to the slides, previous demos, or the `solution` folder.

## Steps:

1. If you need extra practice with Object literals and Arrays in JavaScript, go into the `/JS Review/README.md` and complete that review first. 

1. In the `WIP` folder, create a folder called `ReviewBasics`. You can create this folder by right-clicking the `WIP` folder, and choosing New Folder.

1. Create a file in the new folder. You can right-click the `ReviewBasics` folder and choose New File. Call the file `practice.html`.  

1. In the empty file, type `html` and pause. You should see a menu with options for html templates. Choose the one that is `html:5`.

1. In `<body>`, create two empty `<div>` tags, the first with an id of "name" and the second with an id of "hobbies".

1. Before the closing `</head>` tag, add an opening and closing `<script>` tag and write a function called init(). In the function use `document.getElementByID` to select the name `div`, and `innerHTML` to populate the `<div>` with your name.

1. In the `<body>` tag add the attribute `onload` and set it to call the `init()` function.

1. Open the file in the browser and check that the div populates.

1. In the `<head>`, add opening and closing `<style>` tags.

1. Style the name div font to be bold and the color of your choice and centered in the body tag.

1. Mark your work as complete. If you are done before others, continue to the Bonus.

## Bonus:

1. In the `<script>` tag, create an array of 3 strings called `hobbies`. 

1. In `init()` create a string to hold a `<ul>`, and `<li>` for each of the  hobbies. Loop through the array adding the list items to the string. 
for each hobby. 

1. Use `document.getElementByID` to select the hobbies `div`, and `innerHTML` to populate the `<div>` with the created string.

1. Style the hobbies div font to be bold and the color of your choice.


