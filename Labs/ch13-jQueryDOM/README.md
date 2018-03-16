# Chapter 13: Exercise: Manipulating the DOM with jQuery
## Objectives
* In this lab, you will practice manipulating the DOM with jQuery.  

### Estimated Completion Time 
20 minutes

## Steps:

1. Continue working with your `WIP\jQuery\selectors.html` file. If you were not able to finish the last exercise, you can copy the solution from its solution folder. 

1. Recall the previous code for favorites. 
	``` javascript
		var myFavorite = $(".favorite").html();
		$(".favorite").html(myFavorite + ' **favorite');
	```
1. Let’s replace this code with an each method that will find each element with the class of favorites, and apply a function to change the html.
	``` javascript
	$(".favorite").each(function(){
			var currVal = $(this).html();
					$(this).html(currVal + '  **favorite');
		});
	```
	
1. Check your work in the browser.

1. Redo this html change using append. Refresh to check your code works.

