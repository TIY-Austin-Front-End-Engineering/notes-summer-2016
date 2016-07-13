// use underscore
console.log(_.max([1,4,2,634,122,5]));

document.querySelectorAll('div').forEach(function() {
  console.log('hi');
});

function sumAll() {
  // var arr = [];
  // for (var i = 0; i < arguments.length; i++) {
  //   arr[i] = arguments[i];
  // }
  // [].prototype.slice.call(arguments)
  _.toArray(arguments).forEach(function(a) {
    console.log(a);
  });
}

sumAll(2,5,8,3,6);

array.map(function() {})

_.map(array, function() {})
