# Chapter 3: Practice with Basics of HTML 

## Objectives
* Practice with a HTML `<head>` child elements
* Comment / Uncomment code
* 

### Estimated Completion Time 
10 minutes

## create a page

1. In your `/WIP` folder create a folder called `html`.

1. Add an HTML file called index.html by right-clicking the html folder and choosing `new file`.

1. In the file start typing `html`, and choose the template with html:5 as in this directories screenshot `choose-template.png`

1. You will do your work in this `WIP/html` directory and file.

    ## character encoding - commenting/uncommenting code
1. Copy this code and paste it into the `<body>` element.
    ```html
    <h1>Welcome to the home page in multiple languages!</h1>
    <ul>
        <li>Czech - Vítej</li> 
        <li>Greek - Καλώς ορίσατε</li>
        <li>Bosnian - Dobrodošli</li>
        <li>Italian - Benvenuto</li>
        <li>Chinese (Mandarin) - 欢迎</li>
    </ul>
    ```

1. Load the page in Chrome and view the characters. Do they look okay?

1. Comment out the following line in your `index.html` by clicking the line, and using the keyboard shortcut of control+/  (forward slash)
    ```html
    <meta charset="UTF-8">
    ```

1. After this commented out line add this line for character encoding:
    ```html
    <meta charset="ISO-8859-1">
    ```

1. Reload the page and view the differences.

    ## favicon
1. Search for a PNG image you like using Google image search, specifying a custom size of 260x260. Download the file into your `WIP/html` directory.

1. Visit the website: https://realfavicongenerator.net/ and upload your image into tool. 

    Notice how it generates icons for usage not just in a desktop browser but also for various mobile environments. Choose to keep in same folder, and generate the code and icons.

    Copy the code into the `<head>` element of your html file. IN between the start and end tags for `head`.

1. Download the zip file and use Windows Explorer to extract the files into a new directory `WIP\html\favicon`. Ensure the files are moved into the same directory level as the html file.

    ## adjust relative paths

1. If you open the browser now, you might see an error in the browser console. The generated code is assuming you are working on a server, and the / before the name of the file looks for the root. When using file:/ the root is c:\ !  Fix this by removing the slash from the `href` attribute value.

1. Reload the browser and you should see the favicon in the browser tab.

    ## view meta description

1. Use Google and Bing to search for `Mozilla Developer Network` and read the search results description.

1. Click to visit the website. Right click in browser and choose `View Source`.  Use control-F to find the meta description, you should see the same text as what was displayed in the search results. 

1. Mark your work as complete and help others. We retain more by helping others!