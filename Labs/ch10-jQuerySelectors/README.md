# Chapter 10: Exercise: jQuery Selectors
## Objectives
* Create a new HTML page
* Reference a jQuery script
* Create jQuery selectors
* Add some simple styling


### Estimated Completion Time 
15 minutes

## Steps:
### Creating an HTML Page and Using jQuery Selectors
1. In this exercise you will create an HTML page and reference the jQuery script. You'll then work with different jQuery selectors to locate elements in the page.

1. In the `WIP` folder, create a folder named
`jQuery`.

1. Create a subdirectory called `/scripts` 

1. Into `WIP/jQuery/scripts`, download jQuery from the website: `https://jquery.com/download/`

	Get the latest compressed (minified) and uncompressed versions.
	
	If you do not have internet access you can also copy the scripts from `/Labs/ch10-jQuerySelectors/scripts`

1. Compare the uncompressed and compressed versions to see the difference.

1. In your `WIP/jQuery/` directory, create a file named `selectors.html`. 

1. READ: A reference to jQuery needs to be added to your HTML file.  This can be done using one of the libraries in your `/scripts` folder, or you can reference a CDN.

1. Immediately above the closing `</head>` tag add the following script block:
	``` javascript
	<script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>

	<script>    window.jQuery || 
	document.write('<script src="./scripts/XXXXXXX"><\/script>');
	</script>
	```

	Where XXXXXX is a script that you downloaded.

1. Place the following script immediately above the closing </head> tag – after the script reference you just added. 
	``` javascript
	<script>
		$(document).ready(function() {
			alert('hello');
		});
	</script>
	```
1. Open your `selectors.html` in a browser. You should see the alert. If not, use Developer Tools in your browser to see what the issue may be.  Check for syntax errors under the Console

1. If you were successful the first time, you will now purposely cause an error to see what it looks like. Temporarily set the CDN to have the wrong value , such as `jquery-2.ABC.js`.  Reload the browser, Does your local file work?

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
1. Refresh your browser and note that the paragraphs are bold.
