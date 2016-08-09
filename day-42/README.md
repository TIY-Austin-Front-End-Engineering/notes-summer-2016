[Table of Contents](/README.md)

# Day 42 - Build Tool, Relationsal Data

## Review
- build tool review
  - npm - node package manager
  - meant to keep track of dependencies needed for a project.
    - to use npm, run `npm init` which creates a `package.json` file for the current directory
    - `npm install` (without any other arguments) will install any packages listed as dependencies in the `package.json` file, and put them in the `node_modules` folder.
  - can also be used to run scripts from the command line
    - any key in the `scripts` object of the `package.json` file are able to be run from the command line with the command `npm run <script name>`
    - by default npm comes with a few commands that automatically chain together:  `preinstall` and `postinstall` will automatically run before and after the `install` command, even without you asking them to.
    - the scripts in our build tool are just bash commands that are chained together

## Challenge
Fizz Buzz
- for every number 1-100,
  - for every multiple of 3 print 'fizz'
  - for every multiple of 5 print 'buzz'
  - for every multiple of both print 'fizz buzz'
  - otherwise print the number

## Notes
- relational data
  - document store databases
    - store entire documents (often in JSON) at a given endpoint
    - no limit to the type of data we can store in these databases
    - the limit is there is no fast and easy way to retrieve relational data
  - relational databases (also called sql databases)
    - very strict on how we can store data - in table (tabular) format
    - only one value may be stored per cell in a table (no arrays or objects)
    - when i create the relationship between one table's column and another table, i can "index" it so that it can be looked up by that value later. This is far more efficient than filtering through the list one item at a time
- The back end is responsible for
  - database management: creating the tables and relationships between tables, and retrieving (querying) and adding data to the tables
  - endpoint management: creating endpoints that we can access via http, digging through the db to find relevant data and responding to requests with it, protecting data from non-permitted access
  - security issues: any private, sensitive data should be stored on the server and not in javascript (anyone can dig through the javascript source code to find the "private" data)
  - maintenance/background tasks: sending emails, cleaning up data on a regular basis, timed events such as reminders, or push notifications

## Resources
- [curl request docs](http://www.computerhope.com/unix/curl.htm)
