[Table of Contents](/README.md)

# Day 37 - Recursion, Writing Errors

## Review
- how to test listening to the model for changes
  - maybe don't is the answer for now.
  - instead test that all the ways you expect state to be, and that the DOM tree rendered by it matches what you'd expect
  - You can also write tests that throw helpful error when state DOESN't fit into your approved state world view.
- when to write tests (at a bare minimum)
  - for custom logic on models
  - when a component should render differently based on props or state, test the component output with each version of state or props

## Challenge
Implement a recursive function `getDependencies(object)` that returns
all of the unique dependencies and sub-dependencies of a module,
_sorted alphabetically_.

- Dependencies should be printed as `dependency@version` e.g. `inflection@1.2.6`.
- Multiple versions of the same module are allowed, but duplicates modules of
  the same version should be removed.

```
// Example
var deps = {
    "name": "lorem-ipsum",
    "version": "0.1.1",
    "dependencies": {
        "optimist": {
            "version": "0.3.7",
            "dependencies": {
                "wordwrap": {
                    "version": "0.0.2"
                }
            }
        },
        "inflection": {
            "version": "1.2.6"
        }
    }
}

getDependencies(deps)
// => [ 'inflection@1.2.6', 'optimist@0.3.7', 'wordwrap@0.0.2' ]
```

## Notes
- recursion
  - calling a function within itself
  - usually you'll realize you want to do a recursive function when you find yourself re-writing the same code within a function you're working on
  - make sure you put in an escape hatch or you'll get caught in an infinite loop!
- writing errors:
  - when you are ok with the error breaking your code and the program just stops, throw an "uncaught" error
  ```js
  //when an error (exception) occurs:
  throw new Error('helpful error message goes here');
  ```
  - when you don't want to actually break the app but just give a 'warning' like error, 'catch' the error
  ```js
  try {
    // check to see if you should be throwing an error and then throw one
    throw new Error('helpful error message goes here');
  } catch (error) {
    // any errors thrown in the try will show up in the catch
    console.error(error);
  }
  ```
- adding query params to get req
  ```js
  //within an ajaxSettings object (jquery GET request) or a fetch request (backbone)
  url: 'http://someUrl.com/',
  data: {
    queryParamName: 'cool value',
    anotherParamName: 'wordUp',
  }
  // actual url requested: http://someUrl.com/?queryParamName=cool%20value&anotherParamName=wordUp
  ```

## Resources
- [an article about testable code](http://alistapart.com/article/writing-testable-javascript)
