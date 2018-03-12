# Chapter 13: Exercise: Manipulating the DOM with jQuery
## Objectives
* In this lab, you will practice manipulating the DOM with jQuery.  

### Estimated Completion Time 
20 minutes

## Steps:
1. Copy your events.html file from \Labs\ch05-EventModel into the \Labs\ch06-DOM\begin folder. Rename it to dom.html. 
(Alternatively, you can copy the solution from \Labs\ch05-EventModel\end\events.html )

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

