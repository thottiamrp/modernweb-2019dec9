# Chapter 5: Responsive Styling with Bootstrap

## Objectives
* Add images to the previous exercise.

## Steps

1.  In the same directory as this readme.md, locate the `img` directory and copy this directory into your project's **/bootstrap** directory. 

2. In this **/bootstrap** directory, continue working on previous file **grid.html**.   If you did not finish the last exercise, then copy the **grid.html** from the **/Labs/bootstrap/1layout/Solution/** folder into **/bootstrap**

3. Add images for each dog, one to follow each existing `<h2>` element. Do this for all 3 dogs. An example:
    ```html
    <h2>Pembroke Welsh Corgi</h2>
    <img src="img/corgi.jpg" alt="Pembroke Welsh Corgi" />
    ```

4. Reload the browser and then resize the page to see how the default use of `<img />` looks.

5. Now use Bootstrap to make the images responsive. To the first dog image, add a class with **img-fluid**. and **img-thumbnail**. 

    ```html
        <img src="img/corgi.jpg" alt="Pembroke Welsh Corgi" class="img-fluid img-thumbnail">
    ```

6. Reload the browser to see new styling for the image. Resize the page to see how the image responds after having added Bootstrap. 
   
7. For the second image add **img-fluid** and **rounded-circle**.
8. For the third, image add **img-fluid** and **rounded**.


9. Reload the browser to see new styling and responsiveness for the images. 

10. Mark your work as complete, before starting the bonus.

## BONUS: 

Go to https://getbootstrap.com/docs/4.2/content/reboot/ and explore other options for content. 

Go to https://getbootstrap.com/docs/4.2/utilities/borders/ to explore other utilities for different colors and borders for each image.  
