
    let x = 3;
    let y = x++;
    console.log(x, y) // 4 3

  var array = ['a','b','c'];

  for (var index = 0; index < array.length; index++) {
    console.log('In loop #' + index + ' and element is ' + array[index]);
}

console.log('AFTER loop and index= ' + index);

for (let index = 0; index < array.length; index++) {
    const element = array[index]; 
    console.log(element);
}