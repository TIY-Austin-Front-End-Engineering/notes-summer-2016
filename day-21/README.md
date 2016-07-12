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
      - instructions for using it are in its README, and it is linked at the bottom of these notes.
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
    - `const` is for values that do not change, whereas `let` variables can represent values that may change or be re-assigned.
  - template strings
    - use backticks to surround a string rather than single or double quotes
    - escape variables with `${}` to "concatenate" the strings
    ```js
    let name = 'Jess'
    let greeting = `Hello ${name}, how are you today?`
    ```
  - arrow functions
    ```js
    filter(function(item) {
      return item.active;
    });

    filter(item => {
      return item.active;
    });
    ```
    - arrow functions do not create a new scope. This is helpful for callback functions when we want to maintain the same `this` as exists outside the callback.
  - modules
    - modules allow us to keep our code cleaner and more organized, and not 'crowd the global namespace'.
    - modules have 'module scope', and all code they contain is run only when the file in which they reside is imported.
      - runtime code in a module only runs once, no matter how many times it is imported. However, functions and objects/arrays that are exported from a module may be run (for functions) or modified (for objects/arrays) multiple times.
        - every time you run an imported function, the code within that function will run again.
        - likewise, every time you import an exported object, it will still hold on to all the changes that it has been through from other interactions.

## Resources
- [The SPA Scaffold Repo](https://github.com/TIY-Austin-Front-End-Engineering/spa-scaffold)
- [Babel](https://babeljs.io/)
