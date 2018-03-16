# Chapter 12: Exercise: The jQuery EventModel
## Objectives
* Handle jQuery events


### Estimated Completion Time 
20 minutes

## Steps:
 
1. Continue working with your `WIP\jQuery\jq.html` file. If you were not able to finish the last exercise, you can copy the solution from its solution folder. 

1. Let’s add functionality to make the list items disappear from the display when they are clicked.
Before the end of the `$(function()`  add the following script block:
    ``` javascript
    $('li').click(function(){
                $(this).hide();
            });
    ```		
1. Refresh your browser, click items to test and then view the source. Are the list items still there?

1. After the list items add a reset button.            
<button>Reset</button>

1. Add an event so that when the button is clicked, all `<li>` show. Use `.show()`
  	

