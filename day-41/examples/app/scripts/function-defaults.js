function coolFunction(firstName = 'unnamed person') {
  // one option for default:
  // if (!firstName) {
  //   firstname='unnamed person'
  // }
  // another option for default:
  // firstName = firstName || 'unnamed person';
  console.log('hello ' + firstName);
}

coolFunction()
