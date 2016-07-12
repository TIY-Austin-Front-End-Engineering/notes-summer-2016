[Table of Contents](/README.md)

# Day 21 - Build Tools, NPM, ES6, Underscore

## Review
- Models and Views - separation of concerns
- Why SPAs

## Challenge
Write your own function called `forEach` that takes an array or array like object and a callback as its two arguments, and works like the `.forEach()` method. Do not use the `.forEach()` method in your function.

If you finish, write a `map`, `filter`, and `reduce` function, as well.

## Notes
- Build Tools
  - popular ones:
    - Gulp, Grunt, Broccoli, Webpack
    - NPM - Node Package Manager
      - NPM helps us keep track of project dependencies.
        - for example, if the project needs 'jquery' we can add it as a dependency: `npm install --save jquery`
        - if the project needs babel in order to compile, we can add it as a dev-dependency: `npm install --save-dev babelify`
      - NPM also allows us to run and automate 'scripts', and manage configurations for our 'build environment'. for example, `npm run build` will run the code found in the `scripts.build` key of our package.json file on the command line.
    - the spa-scaffold tool comes with some development dependencies, and a bunch of scripts and configuration. They build a file structure for a new project, watch those files for changes, and compile a dist folder for production use.
      - instructions for using it are in the README, and it is linked at the bottom of these notes.
- ES2015
  - ES stands for 'EcmaScript', which is the language specification that javascript follows.
  - add a configuration file to your project called `.jshintrc` to turn of atom jshint warnings.
    - this is a json file that needs the following to make atom ok with es2015:
    - `{"esversion": 6}`
  - Babel
    - Babel is the compiler that helps us use es2015, since it is not fully supported by the browsers yet
    - it is included by default in the spa-scaffold
  - let, const
    - `let` and `const` replace the `var` keyword for making new variables
    - `let` is block scoped, which means it will stay inside of for loops, or if statements when it was declared in them.
  - template strings
  - arrow functions
    ```js
    filter(function(item) {
      return item.active;
    });

    filter(item => {
      return item.active;
    });
    ```
    -
  - modules
    - `export`ing happens only once, no matter how many times the file is imported. SO if you export an instance of an object, every time you modify that object or import it you will always be dealing with the same object
- Underscore

## Resources
- [The SPA Scaffold Repo](https://github.com/TIY-Austin-Front-End-Engineering/spa-scaffold)
- [Babel](https://babeljs.io/)
