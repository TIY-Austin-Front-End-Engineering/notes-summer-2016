// inputs - single string character
function isVowel(char) {
  var answer = false;
  // test whether the string is a vowel
    // know what vowels are
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  for (var i = 0; i < vowels.length; i++) {
    if (vowels[i] === char) {
      answer = true;
    }
  }
  // outputs - true or false boolean
  return answer;
}

// inputs - single string character
function isVowel(char) {
  // test whether the string is a vowel
    // know what vowels are
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  if (vowels.indexOf(char) > -1) {
    return true;
  } else {
    return false;
  }
  // outputs - true or false boolean
}

// inputs - single string character
function isVowel(char) {
  // test whether the string is a vowel
    // know what vowels are
  if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
    return true;
  } else {
    return false;
  }
  // outputs - true or false boolean
}

console.log(isVowel('q'));
console.log(isVowel('a'));

// input is a string
function reverseString(str) {
  //reverse a string
  // var arr = str.split('').reverse().join('');
  // var reversedArr = arr.reverse();
  // var reversedStr = reversedArr.join('');

  // output the reversed string
  return str.split('').reverse().join('');
}

console.log(reverseString('hello i\'m Jess'));
console.log(reverseString('unicorns for life'));













//
