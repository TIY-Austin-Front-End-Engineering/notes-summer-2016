[Table of Contents](/README.md)

# Day 37 - Unit Testing!

## Review
- what is redux?
  - an implementation of flux.
  - flux is a data management architecture invented by Facebook
    - the architecture we've been using is flux inspired with:
      - "single source of truth" data store,
      - uni-directional data flow,
      - consolidation of state at high level components
- lifecycle method or lifecycle 'hooks'
  - examples of lifecycle methods:
    - `getInitialState`
    - `componentWillMount`
      - happens before the first render
      - useful for testing whether or not some condition is met that allows us to mount the component
    - `componentDidMount`
      - happens after the first render
      - set up listeners, initiate fetching if needed
    - `render`
    - `componentWillReceiveProps`
      - happens every time a components parent passes in new props to it
        - like on a route change (`this.props.params` changes)
        - if data upstream changes, triggering everything to re-render
      - receives the `nextProps` as its argument (which you can name anything you like), which is the `this.props` of the future
      - might use this for when the route changes and i need to get a new model from the server
    - `shouldComponentUpdate`
      - true or false, return false to cancel an 'update', aka re-render
    - `componentWillUpdate`
    - `componentDidUpdate`
    - `componentWillUnmount`
      - happens right before a component is removed from the DOM
      - for cleaning up any ongoing code listeners, setIntervals, etc
      - PLEASE REMEMBER TO UNLISTEN here to prevent zombies
- propTypes - to create appropriate errors when a component is called without the correct props.

## Challenge

## Notes
- why test?
  - allows us to make changes to our code and feel more confident that those changes won't have negative ripple effect (breaking other code elsewhere)
  - define expected behavior of our code.
  - write tests to prove the expected behavior works as defined, so that if something somewhere breaks that behavior you know about it
- what test?
  - unit vs integration
    - unit testing is like testing modules, or individual building blogs of an application
      - testing A specific component, that it renders properly, or a specific model, that it has the correct 'addItemToCart' functionality
    - integration testing is for testing whole apps as the pieces fit together
      - run on the actual built code of our application
  - we will be focusing on unit testing
- how test?
  - install dependencies
    - test runner (mocha)
    - 'assertion library' (chai)
    - easier dom traversal/component testing (enzyme)
    - fake 'document' (since the tests run in node) (jsdom, setup in setup.js)
  - test command (see package.json, npm test)
    - run `npm test` from the project directory to run your tests
  - test files (one for each module)
    - test all the same things you test when you write your code (everything that you normally "test" by logging it out or looking at it in the DOM)

## Resources
- [Mocha docs](https://mochajs.org/#interfaces)
- [Enzyme for testing React components](http://airbnb.io/enzyme/docs/api/shallow.html)
- [Chai for testing all other things](http://chaijs.com/api/bdd/)
