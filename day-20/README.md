[Table of Contents](/README.md)

# Day 20 - Constructors and Prototypes

## Review
- Constructors
- Github partner flow
  - 1 person makes a repo and hooks it up like normal
  - that person adds other partners as collaborators
  - collabs must accept via email
  - collabs do not git init, instead they clone the project to their local machine
    - `git clone <the clone url> <path to folder>`
  - EVERYONE EVERYONE WORKS ON A FEATURE BRANCH
    - make a new branch `git checkout -b <branchName>`
    - checkout an existing branch `git checkout <branchName>`

## Challenge
- Modify the `String` prototype to have a `shout` method that makes the string all capitals and adds 5 exclamation points afterwards
- Create a `Counter` constructor that allows us to increment and decrement easily. It should have an increment and decrement method. They should change the value by 1 by default, OR by any number if they are given a number as an argument

## Notes
- EVERYTHING in javascript is an object!
- EVERYTHING in javascript is an **instance** of a constructor
- we _can_ make methods on the constructor, but that makes a million copies of the same function. Instead, we can **share** that function between all copies of the object via the prototype.
- THUS, Methods should live on the prototype
  - a prototype is an object that other objects can look up methods on.
  - if an object needs access to a method, but cannot find it on itself, it can look on its prototype. if it cannot find the method there, it will look on THAT object's prototype.
  - Inside a method on a prototype `this` refers to the instance the method was called on
  - All objects (even those made by a contructor) point to the `Object.prototype` by default.
    - This gets hooked up when we use the `new` keyword
    - To add methods to a particular constructor's prototype:
    ```js
    function User(username) {
      this.username = username;
    }
    User.prototype.greet = function() {
      console.log('hi, my name is ' + this.username);
    }
    ```
    - To create "inheritance" from one constructor/prototype to another:

    ```js
    function User() {
      // user constructor code goes here
    }
    function Admin() {
      User.apply(this, arguments);
      // admin constructor code goes here
    }
    Admin.prototype = Object.create(User.prototype);
    Admin.prototype.constructor = Admin;

    ```

## Resources
