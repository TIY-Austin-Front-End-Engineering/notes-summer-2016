// function letterCount(str) {
//   var result = {};
//   str = str.replace(' ', '');
//   var arr = str.split('');
//   for (var i = 0; i < arr.length; i++) {
//     if (result[arr[i]] !== ' ') {
//       if (result[arr[i]]) {
//          result[arr[i]] += 1;
//       } else {
//         result[arr[i]] = 1;
//       }
//     }
//   }
//   return result;
// }

// function letterCount(str) {
//   var result = {};
//   str = str.replace(' ', '');
//   var arr = str.split('');
//   arr.forEach(function(letter, i, arr) {
//     if (result[letter] !== ' ') {
//       if (result[letter]) {
//          result[letter] += 1;
//       } else {
//         result[letter] = 1;
//       }
//     }
//   });
//   return result;
// }

function letterCount(str) {
  str = str.replace(' ', '');
  var arr = str.split('');
  var result = arr.reduce(function(returnSoFar, letter, i, arr) {
    if (returnSoFar[letter] !== ' ') {
      if (returnSoFar[letter]) {
         returnSoFar[letter] += 1;
      } else {
        returnSoFar[letter] = 1;
      }
    }
    return returnSoFar;
  }, {});
  return result;
}

console.log(letterCount('hello world'));
