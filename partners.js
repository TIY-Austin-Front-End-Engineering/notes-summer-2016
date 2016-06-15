var partners = [
  'Mark',
  'Shannon',
  'Caryn',
  'Coop',
  'Jonny',
  'Dan',
  'Gabe',
  'Shawn',
  'Ben',
  'James',
  'Travis',
  'Amanda',
  'Christian',
  'Louie',
  'Haley'
];

function selectPairs(list) {
  var pairs = [];
  while (list.length) {
    if (list.length === 1) {
      pairs[pairs.length - 1].push(list[0]);
      list = [];
    } else {
      var num1 = getNum(list.length);
      var student1 = list[num1];
      list = list.slice(0, num1).concat(list.slice(num1+1));
      var num2 = getNum(list.length);
      var student2 = list[num2];
      list = list.slice(0, num2).concat(list.slice(num2+1));
      pairs.push([student1, student2])
    }
  }
  return pairs;
}

function selectTriplets(list) {
  var pairs = [];
  while (list.length) {
    if (list.length < 3) {
      list.forEach(function(student, i) {
        pairs[pairs.length - (i+1)].push(student);
      });
      list = [];
    } else {
      var num1 = getNum(list.length);
      var student1 = list[num1];
      list = list.slice(0, num1).concat(list.slice(num1+1));
      var num2 = getNum(list.length);
      var student2 = list[num2];
      list = list.slice(0, num2).concat(list.slice(num2+1));
      var num3 = getNum(list.length);
      var student3 = list[num3];
      list = list.slice(0, num3).concat(list.slice(num3+1));
      pairs.push([student1, student2, student3])
    }
  }
  return pairs;
}

function getNum(max) {
  return Math.floor(Math.random() * max);
}

if (process.argv[2] === '2') {
  console.log(selectPairs(partners));
} else if (process.argv[2] === '3') {
  console.log(selectTriplets(partners));
}
