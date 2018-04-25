{
    let x = 23;
    var y = 24;
}

console.log(x);
console.log(y);

let working = false;
            
const day = new Date().getDay();
//  0 = Sunday 1 = Monday ....  6 = Saturday
if (day==0) {
    console.log('Today is Sunday');
    working = false;
} 
else if (day==1) {
    console.log('Today is Sunday');
    working = false;
} 
else {
    console.log('Back to work, day is ' + day);
    working = true;
}


if (day==6 || day==0); {
    console.log('It is the weekend')
    working = false;
}  

console.log(working);
