# Chapter 11: Exercise: JQuery CSS Manipulation & Selectors
## Objectives
* In this lab, you will use multiple CSS manipulations
and use various selection techniques


### Estimated Completion Time 
20 minutes
## Objectives
* Create a new HTML page
* Reference a jQuery script
* Create jQuery selectors
* Interact with elements using jQuery

### Estimated Completion Time 
20 minutes

## Steps:

1. Continue working with your `WIP\jQuery\jq.html` file. If you were not able to finish the last exercise, you can copy the solution `\Labs\ch10-jQuerySelectors\solution\selectors.html`. 

1. Apply multiple CSS styles to the `<ul>` elements to make the width narrower, and add a border.
		```javascript
		$("ul").css({
			width: 400,
			border: '2px dashed pink'
		});
		```
1. Refresh the browser to see the red text.

1. Make the items that you do not like to do have a red font.  You can use:
	``` javascript
		$("p:contains('DO NOT')").css('color','red');
	```
1. Refresh the browser to see the red text.

1. Make every other table row highlighted with grey. You can use:
	``` javascript
	$("tr:even").css('background-color','rgba(128,128,128,.5)');
	```

1. Try to add a click event for all immediate tr children of the table element (only immediate children – not all descendants), use this code:
	``` javascript
		$('table > tr').click(function(){
				$(this).css('background', '#66FF00');
			});
	```
1. Refresh the page in the browser and try selecting a row by clicking it. Can you tell why not?

	The answer to the above question is "no, it doesn't work" because tables have an implicit tbody child added inside of the table element by the browser. The tbody element is the immediate child which is why the previous selector doesn't select any tr elements.

1. Change the selector to table > tbody > tr and save the page.

1. Refresh the page in the browser again and try clicking the rows. You should now see a green background become added.

1. Mark your work as complete.

### Bonus

1. Add a `<style></style>` section in the head. Add a class called `highlight` which applies a yellow background.

1. Add a button before your list items with the text  `Toggle Evens`. 

1. Use jQuery to add a click event for this button. In the callback function toggle the highlight class for even li's. 

1. If time permits, visit http://codylindley.com/jqueryselectors  and experiment with different selectors.

