var unicorns = [
  {
    name: 'Amalthea',
    color: 'white',
    powers: ['healing', 'species transformation'],
    last: true
  }, {
    name: 'Dorothy',
    color: 'transparent',
    powers: ['invisibility'],
    last: false
  }, {
    name: 'Sparkles',
    color: 'rainbow',
    powers: [],
    last: false
  }, {
    name: 'Vern',
    color: 'white',
    powers: ['healing'],
    last: false
  }, {
    name: 'Bubbles',
    color: 'pink',
    powers: ['uncanny speed', 'healing'],
    last: false
  }, {
    name: 'Nancy',
    color: 'white',
    powers: ['species transformation'],
    last: false
  }
];

function findHealing(unicorn) {
  return unicorn.powers.indexOf('healing') !== -1;
}

var healingUnicorns = unicorns.filter(findHealing);

var healingUnicornNames = healingUnicorns.map(function(unicorn, i, arr) {
  return {name: unicorn.name, power: 'healing'};
});

console.log(healingUnicornNames);
