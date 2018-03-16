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

1. Continue working with your `WIP\jQuery\selectors.html` file. If you were not able to finish the last exercise, you can copy the solution `\Labs\ch10-jQuerySelectors\solution\selectors.html`. 

1. Make the items that you do not like to do have a red font.  You can use:
	``` javascript
		$("p:contains('DO NOT')").css('color','red');
	```
1. Refresh the browser to see the red text.

1. Create a table of musicians and their genre after the list items. Create a header row, and at least 3 rows of data. Two rows should have the same genre.
	``` javascript
		<table style="border: 1px solid black;">
				<tr>
					<th>Artist</th>
					<th>Genre</th>
				</tr>
				<tr>
					<td class="favorites">Stevie Wonder</td>
					<td>Soul</td>
				</tr>
				<tr>
					<td class="favorites">Les Claypool</td>
					<td>Funk Metal</td>
				</tr>
				<tr>
					<td>Stevie Nicks</td>
					<td>Pop Rock</td>
				</tr>
				<tr>
					<td>Amos Lee</td>
					<td>Soul</td>
				</tr>
			</table>
	```
1. Look at the table by refreshing the browser.

1. Make every other row highlighted with grey. You can use:
	``` javascript
	$("tr:even").css('background-color','rgba(128,128,128,.5)');
	```
1. Add a click event for all immediate tr children of the table element (only immediate children – not all descendants), use this code:
	``` javascript
		$('table > tr').click(function(){
				$(this).css('background', '#66FF00');
			});
	```
1. Refresh the page in the browser and try selecting a row by clicking it. Does it work? Why or why not?
The answer to the above question is "no, it doesn't work" because tables have an implicit tbody child added inside of the table element by the browser. The tbody element is the immediate child which is why the previous selector doesn't select any tr elements.

1. Change the selector to table > tbody > tr and save the page.

1. Refresh the page in the browser again and try clicking the rows. You should now see a green background become added.

1. Choose your favorite thing to do in your favorite list. Use a class to indicate it is your favorite. 
	``` javascript
	<li class="favorite">Vote</li>
	``` 

1. Add this jQuery code to target the class and to modify the html to use favorite 
	``` javascript
	var myFavorite = $(".favorite").html();
			$(".favorite").html(myFavorite + ' **favorite');
	```
1. Refresh the page in the browser and you should see the **favorite is in your html.

1. Now modify one of the musicians in the table, using the same class of favorite.
	``` javascript
	<td class="favorite">Les Claypool</td>
	```
1. Refresh the page in the browser and you may notice the artists name is not appearing. We will fix this in an upcoming exercise.

1. Open another browser (different from the one you've been using) and paste in the URL. Note that the page works the same in the other browser since jQuery is a cross-browser library.

1. If time permits, visit http://codylindley.com/jqueryselectors  and experiment with different selectors.

