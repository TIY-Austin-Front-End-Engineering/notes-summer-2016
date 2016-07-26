[Table of Contents](/README.md)

# Day ## - Topic, Topic

## Review

## Challenge

## Notes
- React setup
	- install dependencies
		- `npm install --save react react-dom`
		- `npm install --save-dev babel-preset-react`
	- setup our `package.json` file
		- add the react compiler preset:
		```json
		"babel": {
	    "sourceType": "module",
	    "presets": [
	      "es2015",
				"react"
	    ]
	  }
		```
	- setup `.jshintrc` file
		```json
		{
			"esversion": 6,
			"esnext": true
		}
		```
	- create a container in your html into which you can render your components
- React components
	- discrete sections of HTML that encompass both the visual and functional features of that element
	- created with `React.createClass()` - which builds the constructor
	- instantiated with `<` and `/>` angle brackets, as with HTML
	- added to the DOM with the `ReactDOM.render()` function
		- which takes 2 arguments: the react element to render, and the DOM element into which to render it
	- every react component needs a `render` function
		- the `render` function must return JSX - which looks just like html!
		- you can embed javascript values directly in your JSX by wrapping them in `{}`
	- React components live in the 'shadow' DOM or 'virtual' DOM - they aren't in the REAL DOM!
		- this is for performance improvements, to make sure we only actually re-draw the DOM when something actually changes in it.
		- the implication of this is that we should never interact directly with the REAL DOM when we use react.
			-	Thus, no more `jquery` dom manipulation or directly accessing the `document`.
			- Instead, react introduces the idea of a `ref` attribute and `this.refs`, which provide us with direct access to the DOM elements a JSX component _refers_ to.
				- `<input ref="username" />` and `this.refs === {username: inputEl}`
- React Router
	- is actually just a react component that someone else built!
	- unlike other imported packages we've used in the past, react-router doesn't have a `default` export - only named ones
		- we must import the names directly like so:
		- `import { namedExport, otherNamedExport } from 'packageName';`
		- eg: `import { Router, Route, hashHisotry } from 'react-router';`
	- we render our instance of a React Router into the DOM, and it is our whole app, responsible for rendering all other components.

## Resources
