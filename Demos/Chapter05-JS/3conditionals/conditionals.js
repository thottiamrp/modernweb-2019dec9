

let working = false;

const isHoliday = isTodayAHoliday();
const day = new Date().getDay();
//  0 = Sunday 1 = Monday ....  6 = Saturday
if (day == 0) {
    console.log('Today is Sunday');
    working = false;
}
else if (day == 6) {
    console.log('Today is Saturday');
    working = false;
}
else if (isHoliday) {
    console.log('Today is a holiday');
    working = false;
}
else {
    console.log('Back to work, day is ' + day);
    working = true;
}

function isTodayAHoliday() {
    console.log('could call AJAX');
    return false;
}


if (day == 6 || day == 0) {
    console.log('It is the weekend ' + day);
    working = false;
}

console.log(working);

const lie = false;
console.log('lie == 0 ', (lie == 0));
console.log('lie == "" ' , (lie == ""));
console.log("lie == '' " , (lie == ''));

console.log('​null == undefined', null == undefined);
console.log('​null === undefined', null === undefined);

console.log('​null == null', null == null); 
console.log('​NaN == NaN', NaN == NaN);

