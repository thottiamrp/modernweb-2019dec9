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
30 minutes

## Steps:
### Creating an HTML Page and Using jQuery Selectors
1. In this exercise you will create an HTML page and reference the jQuery script. You'll then work with different jQuery selectors to locate elements in the page.

1. In the `WIP` folder, create a folder named
`jQuery` with a file named `selectors.html`. 

1. A reference to jQuery needs to be added.  This can be done using a file contained in your site or you can reference a CDN. Immediately above the closing </head> tag add the following script block:
	``` javascript
	<script src="https://code.jquery.com/jquery-2.2.2.js"></script>

	<script>    window.jQuery || 
	document.write('<script src="../../js/jquery-2.2.2.js"><\/script>');
	</script>
	```
1. Place the following script immediately above the closing </head> tag – after the script you just added. 
	``` javascript
	<script>
		$(document).ready(function() {
			alert('hello');
		});
	</script>
	```
1. Open your selectors.html in a browser. You should see the alert. If not, use Developer Tools in your browser to see what the issue may be.  Check for syntax errors under the Console

1. If you were successful the first time, you will now purposely cause an error to see
what it looks like. Temporarily set the CDN to have the wrong value , such as jquery-2.ABC.js.  Reload the browser, Does your local file work?

1. If your local file works, temporarily set it to something invalid.  

1. Once you have seen the error in Developer Tools, fix the script tags to be valid so that you do get the alert.  Once this is working, you can remove the alert.

1. Now inside the <body> tag in selectors.html add two `<ul>` for things you like and things you do not like to do. Include at least 3 items in each list. For example:
	``` 
	<p>Things I Like to Do</p>
		<ul>
			<li>Wash Car</li>
			<li>Finish Taxes</li>
			<li>Vote</li>
		</ul>
	<p>Things I DO NOT Like to Do</p>
		<ul>
			<li>Wash Dishes</li>
			<li>Start Taxes</li>
			<li>Go to the DMV</li>
		</ul>
	```
1. Refresh the browser to see the content you added. 
1. Add the following  inside the  $(document).ready() function:
	``` javascript
		$('p').css('font-weight', 'bold');
	```
1. Refresh your browser  and note that the paragraphs are bold.

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

