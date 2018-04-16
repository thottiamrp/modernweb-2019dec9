# Chapter 3B: Adding CSS to pages

## Objectives
* Add CSS and some simple styling to pages

### Estimated Completion Time 
20 minutes

## Create page and include CSS
 
1. In your `/WIP/` directory create a new directory called `CSS` and a file inside `CSSpractice.html`. 

1. Type html and choose the template that is just labeled html. View slide for screenshot of which to use.

1. Notice:
    * that the title tag is highlighted - type CSSPractice.
    * that there is a link to an external stylesheet main.css that has media set to screen. Change this value to all.
    * that there is a script tag - remove it

1. Create the `main.css` file being referred to in the HTML at the same level as your html file. 
    * Inside of this css file, add this statement:
    ```css
    @import url('halloween.css');
    ```
    * create a halloween.css and set `<header>` elements to have an orange background color.
    ```css
    header {background-color: orange;}
    ```    

1. In the HTML file's `body` tag, create a `<header>` element.

1. In header,  
    * Create an `h1` element with the text `Lorem Ipsum Generators`
    * Create an `h2` element with the text `let's show some content`
   
1. Load the page - there should be a header in progress now with an orange background.
    * If not - check your CSS and use of import.

1. After h2, add a `<nav>` tag and 3 list items with anchors.  You can use this Emmet abbreviation in VSCode to create this dynamically:
    ```
    nav>ul>li*3>a
    ```

    For now just add short words to each list item for display. 

1. You can add styles in your `main.css` if you have enough screen space you may wish to open your editor in Split mode (upper right icon in VSCode) to see both HTML and CSS at once. Or you may wish to put your CSS in embedded `<style>` tags.
    * target the body tag and make text red

1. Reload your page, what color is the displayed h1,h2 and anchor text? 
   * We will address the nav styling later.

1. Continue the following steps refreshing the browser when you want to check work that you are doing.

## Adding more content and styles

1. After header, add an `<main>` element with the text MAIN AREA   

1. After main, create a footer with this content. 
    ```html
    <footer>
            &copy; 2018 - Karmoxie Consulting <a href="mailto:judy@karmoxie.com?subject=CSS%20Exercise">judy@karmoxie.com</a> or <a href="tel:412-353-9161">412-353-9161</a>
    </footer>
    ```

    Offering phone links is helpful for users viewing web documents and laptops connected to phones. Load your page and look at the links. Test the mail link works and say Hello!

## Add and style Lorem Ipsum
    
1. Take 2-3 minutes for this step:
    * open this website https://loremipsum.io/ultimate-list-of-lorem-ipsum-generators/
    * choose 3 sites generators of interest into new browser tabs - right click to open in new tab if you need to
    * interact with these generators. Some have nice features for generating content. 

1. For each generator you chose:
    * create an `<article>` inside of main
    * give it an id value to represent the generator you are assigning
    * create a child h2 element that describes that generator
    * add 3-5 child paragraphs of content from the generator websites
    * add a `<footer>` before the closing article tag with a link to the generator website
        * You can type a, wait and see a drop down to get the basic structure
    * update the nav links to link to the article 

1. Test your links, you may need to copy a few paragraphs to get an article to start "below the fold" so that you see the page scroll when you click the link for that article.

1. Perform the following using CSS, check after each step: (modify HTML as needed)
    * Target all h2 to be green (should affect the text `let's show some content` and h2 in articles) 
    * Target just the h2 in the header to be black
    * Target the third letter of the first generator's h2 to also be black (add span, use id and descendent)
    * Target all paragraphs to be blue
    * Target the second paragraphs of each to be black (use class)
    
## Make printing better and cheaper

1. When viewing the page use the browser to start to print it so that you see the print preview dialog.
    * You should see all content with same color set (if your OS supports it)

1. Make changes so that when you print the document only the main content is printing in black text. For hints and to continue, scroll down:

    ```







































    ```
    To quickly get rid of colors you can either:
    1. wrap your rule-sets in 
        ```CSS
        @media screen { 


        } 
        ```
    1. Or put media="screen" back in the link to main.css

1. To turn off the `<header>` and `<footer>` create a `print.css` which excludes
these by using this CSS - we will talk about other values later. 

```css
    header, footer {display: none;}
```

1. View on screen, view on print preview is same? if not check your work.

## Continuing Bonus

1. If done before others, create a copy of the CSSPractice.html file you created and call it DynamicLoremIpsum.html

1. Create a JSON fle with your content to be loaded by using JSON-server.
    * take a look at the docs to understand how to format and add id values
    * Google npm json-server or refer to the Demos in Ch01 