var eightiesBabies = [];

// get the first person in the list
console.log(people[0]);

// get only the name of the first person in the list
console.log(people[0].name);
console.log(people[0]['name']);

// get the age of the 5th person in the list
console.log(2016 - people[4].birthYear);
var currentDate = new Date();
console.log(currentDate.getFullYear() - people[4].birthYear);

// get only the people who were born in the 80's
for (var i = 0; i < people.length; i++) {
  if (String(people[i].birthYear).indexOf('8') === 2) {
    eightiesBabies.push(people[i]);
  }
}
console.log(eightiesBabies);

var eightiesBabies2 = people.filter(function(person) {
  return String(person.birthYear).indexOf('8') === 2;
});
console.log(eightiesBabies2);

// get only the names of people in the list
var peopleNames = people.map(function(person) {
  return person.name;
});
console.log(peopleNames);

// get only the names of the people who are more than 50

// get the oldest person
