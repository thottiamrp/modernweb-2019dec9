# Chapter 5: Responsive Styling with Bootstrap

## Objectives
* Use Grid System to lay out the content that fluidly resizes on all the
* devices.  
* Lay out the 3 rows to display 3 equal width columns on large display.
* Make the layout 2 columns on a med width display.
* The content stacks to a single column layout on small display.

## Steps

1. Create a **bootstrap** directory in your working project.

2. Look in the same directory as this README.md and copy the file named `starterTemplate.html` into the new **bootstrap** directory. Right-click to rename the file **grid.html**.

3. Open your new **grid.html** in the browser to see how it currently displays 3 breeds of dogs. 

4. Modify the **grid.html** file to use Bootstrap classes. The outermost div should have **container**, then **row**, then add the reference to column sizes to each div for the different dogs. Notice how it specifies how to work with different screen sizes. 
    ```html
    <div class="container">
            <div class="row">
                <div class="col-xs-12 col-sm-6 col-md-4">
    ```                     


5. Now, reload this file in the browser and change the size of the browser window. It should be responsive to screen size changes.

6. Mark your work as complete.


## Bonus

1. If done before others, experiment with spacing using margin and padding shortcuts. https://getbootstrap.com/docs/4.2/utilities/spacing/ 