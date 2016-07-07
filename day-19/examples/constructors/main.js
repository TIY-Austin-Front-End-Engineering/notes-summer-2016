// create an object literal
var myObj = {};
console.log(myObj);

// create an object with a constructor
var myOtherObj = new Object();
console.log(myOtherObj);

var now = new Date();
console.log(now);

// literal syntax
var person1 = {
  name: 'Bill Gates',
  email: 'bill@microsoft.com',
  website: 'http://microsoft.com',
  secretMessage: 'bill likes glasses'
};

function PersonConstructor(name, numberOfLegs) {
  // this is the object we are constructing
  this.name = name;
  if (numberOfLegs !== undefined && numberOfLegs !== 2) {
    this.isBiped = false;
  } else {
    this.isBiped = true;
  }
}

var person2 = new PersonConstructor('Jess', 4);
console.log(person2);

var person3 = new PersonConstructor('Julius Cesar');
person3.megalomaniac = true;

console.log(person3);

function Car(make, model) {
  this.make = make || 'Toyota';
  this.model = model || 'Camry';
  this.wheels = 4;
  this.functional = false;
  this.drive = function() {
    if (this.functional) {
      console.log('wow we\'re going so fast');
    } else {
      console.log('this car is out of commission');
    }
  };
}

var myCar = new Car();
console.log(myCar);

function ToDo(body) {
  var self = this;
  self.body = body;
  this.completed = false;
  this.toggleCompleted = function() {
    this.completed = !this.completed;
    return this.completed;
  };
  this.save = function() {
    if (this._id) {
      $.ajax({
        url: 'http://tiny-za-server.herokuapp.com/collections/tasks/' + self._id,
        type: 'PUT',
        data: JSON.stringify(this),
        contentType: 'application/json',
        success: function(response) {
          //we changed scope so we need to use 'self' instead of this
          console.log('updated successfully', response);
        }
      });
    } else {
      $.ajax({
        url: 'http://tiny-za-server.herokuapp.com/collections/tasks',
        type: 'POST',
        data: JSON.stringify(this),
        contentType: 'application/json',
        success: function(response) {
          //we changed scope so we need to use 'self' instead of this
          self._id = response._id;
        }
      });
    }
  };
}

var washCar = new ToDo('wash car');
washCar.toggleCompleted();
console.log(washCar.completed);






//
