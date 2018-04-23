# Chapter 2: DevTools

## Objectives
* Practice with the browser dev tools

## Steps:

1. If you needed to step away or otherwise did not finish the bonus from the last exercise, please rename any in progress work by renaming the `index.html` file to end with -WIP such as `index-WIP.html` then copy the solution file from `\Labs\ch01-MWA_Node\solution\basics.html` into your `/WIP/` directory and rename it as `index.html`.

1. If not already open, open your `index.html` in the Chrome Browser. Recall Alt-B from within the file being opened in VSCode, or right-clicking in the VSCode Explorer menu to open in default browser.

1. Open the dev tools by right-clicking on the displayed name, and choosing Inspect. 

    This should bring up the tools with the div highlighted in the left side and the CSS on the right.

1. In the CSS, practice changing the width of the box around your name, by:
    * clicking 400px to highlight it
    * hit up/down arrows to see changes go up and down

1. Change the background color, by clicking the color value (#eeeeee) and choosing from color picker. 

1. Center the text by adding a new property. Click on the value that is for the last property in the list (probably purple after color: ). Then hit the tab key.

1. Add this property:   
    ```CSS
    text-align:center
    ```

1. Once this works in dev tools, go back and update the source file.

1. When your name is centered, mark your work as complete.  If you are done before others, help people near you, and continue to the Bonus.

## Bonus:

1. Try being more specific in your CSS so that only your name is centered - not hobbies.
    If you do not have hobbies, try to finish that bonus from ch1, or copy the solution from `Ch01-MWA_Node\Basics\solution`


1. Use this in the CSS to target the element with the id value of name
    ```CSS
    #name { text-align: center}
    ```

1. Try getting the entire box to be centered on the page.
