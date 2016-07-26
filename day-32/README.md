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

## Resources
