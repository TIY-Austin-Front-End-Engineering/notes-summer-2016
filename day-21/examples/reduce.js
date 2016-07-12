var arr = [1,2,3,4];

function add(a, b) {
  return a + b;
}

function reduce(array, callback, initialValue) {
  var returnValue = initialValue;
  for (var i = 0; i < array.length; i++) {
    returnValue = callback(returnValue, array[i], i, array);
  }
  return returnValue;
}

console.log(arr.reduce(add));

console.log(reduce(arr, add, 0));
