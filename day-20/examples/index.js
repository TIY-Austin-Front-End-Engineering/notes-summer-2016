console.log('hi');

function User(options) {
  this.username = options.username;
  this.active = true;
  this.loggedIn = false;
  // this works for making methods but is not preferred
  // this.login = function() {
  //
  // }
}

// we wouldn't put a property on the prototype:
// User.prototype.loggedIn = false;
User.prototype.login = function() {
  console.log(this.username + ' is logged in');
  this.loggedIn = true;
  // returning this allows us to chain methods
  // return this;
};
User.prototype.logout = function() {
  console.log(this.username + ' is logged out');
  // return this;
};


var jess = new User({
  username: 'nicerhugs',
});
var gabe = new User({
  username: 'gabe',
});

console.log(jess, gabe);
jess.login();

var str = 'this is a string';

str.split('');

str.hasOwnProperty('split');
// false
String.prototype.hasOwnProperty('split');
// true


String.prototype.shout = function() {
  return this.toUpperCase() + '!!!!!';
};
str.shout(); // `THIS IS A STRING!!!!!` 

function Counter(num) {
  this.value = num || 0;
}
Counter.prototype.increment = function(amt) {
  return this.value += amt || 1;
};
Counter.prototype.decrement = function(amt) {
  return this.value -= amt || 1;
};

var c = new Counter();


c.increment(5); // c.value === 5
c.increment(); // c.value === 6


// make a special type of user that has all the User props and methods, but ALSO has extra special props or methods

function Admin() {
  User.apply(this, arguments);
}

// Object.create() makes a prototype
Admin.prototype = Object.create(User.prototype);
Admin.prototype.constructor = Admin;

var admin = new Admin({username: 'powerfulOne'});







//
