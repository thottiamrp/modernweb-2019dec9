# Chapter 5: Exercise: The jQuery EventModel
## Objectives
* Handle jQuery events


### Estimated Completion Time 
20 minutes

## Steps:
1. In this exercise you will create an HTML page and add a reference to the jQuery script. You'll then add event handlers for various elements in the page.

1. Open events.html. 
(Alternatively, you can copy your solution from \Labs\ch04-jQuerySelectors\end\selectors.html )

1. Let’s add functionality to make the list items disappear from the display when they are clicked.
Before the end of the `$(document).ready(function()`  add the following script block:
    ``` javascript
    $('li').click(function(){
                $(this).hide();
            });
    ```		
1. Refresh your browser, click items to test and then view the source. Are the list items still there?

1. After the list items add a reset button.            
<button>Reset</button>

1. Add an event so that when the button is clicked, all `<li>` show. Use `.show()`
  	

