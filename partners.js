var students = [
  'Mark',
  'Shannon',
  'Caryn',
  'Coop',
  // 'Jonny',
  // 'Dan',
  'Gabe',
  // 'Shawn',
  'Ben',
  'James',
  'Travis',
  'Amanda',
  // 'Christian',
  // 'Louie',
  'Haley'
];

function makeGroups(list, number) {
  var groups = [];
  while (list.length) {
    if (list.length < number) {
      list.forEach(function(student, i) {
        groups[groups.length - (i+1)].push(student);
      });
      list = [];
    } else {
      var students = [];
      for (var i = 0; i < number; i++) {
        var num = getNum(list.length);
        var student = list[num];
        list = list.slice(0, num).concat(list.slice(num+1));
        students.push(student);
      }
      groups.push(students);
    }
  }
  return groups;
}

function getNum(max) {
  return Math.floor(Math.random() * max);
}

if (!process.argv[2]) {
  console.log('use the following syntax: partners <number of students per group>');
} else {
  console.log(makeGroups(students, process.argv[2]));
}
