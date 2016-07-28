[Table of Contents](/README.md)

# Day 34 - React Cont'd

## Review
- dependencies for a project
  - `npm install --save react react-router react-dom backbone underscore jquery`
  - `npm install --save-dev babel-preset-react`
  - don't forget to add the preset to your `package.json` file
- component overview
  - javascript that renders HTML
  - backed by data
    - `this.state` is for any data that may change over time, or that cannot be gathered/figured out from any other source
      - `this.state` is changed by calling `this.setState()`
    - `this.props` is for any data that can be passed in from a parent component
      - `this.props` can only change by the parent passing in a new value
    - any time either `this.state` OR `this.props` change, the component automatically renders itself again.
  - handles all user interaction with that HTML
- data modeling
  - what discrete types of data is our application representing
  - make a model for each of those
    - is it possible that i will have more than one of that model in my application at one time?
    - if so, make a collection as well
  - create a store, where the instances of all your data will be kept.
- building components
  - draw out wireframes for each page or route
  - break the wireframe up into components
    - it may help to build your html IN YOUR HTML FILE first, and then you can copy and paste the html elements into your render functions as JSX
    - think about whether a particular part of the page needs discrete data
    - think about what is repeated on the page
    - think about what the nesting looks like - if there are parents and children
    - you can build the components in isolation from each other.
- build our router and page level components
  - at the page level is where i want to import the store, and fetch any data from the server, and listen to the data for changes
  - in getInitialState return the initial state object
    - state object can be setup like this:
    ```js
    {
      users: store.users.toJSON(),
      posts: store.posts.toJSON()
    }
    ```
  - in componentDidMount do 2 things:
    - fetch the data
    - listen to the data for changes and set state

## Challenge

## Notes
- query parameters


- index routes
- state (for non-ajax purposes)
  - determining what can be state vs props
- optional showing of components
- using backbone models/collections and a 'store'

- callback props
- giving props to `this.props.children`

## Resources
