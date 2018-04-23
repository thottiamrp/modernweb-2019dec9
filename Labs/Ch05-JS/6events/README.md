# Chapter 3C: Forms practice

## Steps

1. Create a form to add a band. We are not submitting to the server, so no need for an action in your form. Howver, make sure that you have an id in your form.

1. In the form have an event to call a function to add a band
    ```html
    <button onclick="addBand()">Add band</button>
    ```

1. Open the website:
https://www.w3schools.com/js/js_validation.asp

1. Create the addBand(event) function to first validate the fields and then add the new data to the array.  (or create an annoying alert pop-up saying the data was bad)

    We dont want the form to submit, so in the addBand function return false, and in the onlick - call the function this way:
    ```html
    onclick="return addBand()"
    ```

1. Test that it works for good and bad data

1. Add an event such as on the slide which converts Capitals to lowercase.

## Bonus

1. Add a focus event for a field with an annoying popup saying you have just entered this field.

1. Add a blur event which logs the data the user just entered.

