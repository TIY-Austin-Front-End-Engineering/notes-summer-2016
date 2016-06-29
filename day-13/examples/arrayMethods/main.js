// get the first person in the list
console.log('1', people[0]);

// get only the name of the first person in the list
console.log('2', people[0].name);
console.log('2', people[0]['name']);

// get the age of the 5th person in the list
var currentDate = new Date();
console.log('3', 2016 - people[4].birthYear);
console.log('3', currentDate.getFullYear() - people[4].birthYear);

// get only the people who were born in the 80's
var eightiesBabies = people.filter(function(currentItem, index, array) {
  // if (String(currentItem.birthYear).indexOf('8') === 2) {
  if (currentItem.birthYear > 1979  && currentItem.birthYear < 1990) {
    return true;
  }
});
console.log('4', eightiesBabies);

// get only the names of people in the list
var namesOnly = people.map(function(currentItem, index, array) {
  return currentItem.name;
});
console.log('5', namesOnly);

// get only the names of the people who are more than 50
// filter to get only people 50 or older
// map to get only their names
var fiftyYrOldNames = people
  .filter(function(person, index, array) {
    return (2016 - person.birthYear) >= 50;
  }).map(function(personOver50, index, array) {
    return personOver50.name;
  });
console.log('6', fiftyYrOldNames);

//get only items made of wood
var itemsMadeOfWood = items.filter(function(item, i, arr) {
  if (item.materials.indexOf('wood') !== -1) {
    return true;
  }
});
console.log('7', itemsMadeOfWood);

[1,5,2,7].reduce(function(returnValueSoFar, currentItem, index, array) {
  return returnValueSoFar + currentItem;
}, 0);
//this is the same as the above example, but shorter
[1,5,2,7].reduce(function(a,b) {return a+b;}, 0);

// get the oldest person
var oldestPerson = people.reduce(function(returnVal, curr, i, arr) {
  if (returnVal.birthYear < curr.birthYear) {
    return returnVal;
  } else {
    return curr;
  }
});
console.log('8', oldestPerson);
