<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Page Title</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" media="screen" href="main.css" />
    <script src="main.js"></script>
</head>
<body>
    <script>
        document.write('<h1>Welcome to Class</h1>')
        document.write('<p>Check the console</p>')

        var x;
        var y;
        var z;
        x=10;
        y="10";
        z=30;

        console.log("x is of type" + typeof x);
        console.log("y is of type" + typeof y);
        console.log("z is of type" + typeof z);

        var newX = x++;
        console.log("newX is " + newX);
        console.log("Does X equate to Y?  " + (x==y));
            
    </script>
</body>
</html>