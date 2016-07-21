[Table of Contents](/README.md)

# Day 29 - Data Store, Backbone Review, Agile

## Review

## Challenge

## Notes
- data stores
  - create a single object that keeps track of all your application state
  - it should contain instances of any collections or models needed
  - it can also contain other 'application state' such as whether you are actively fetching from the server, or which page of blog posts you are currently showing to the user (if you are paginating your posts)
- style guides
  - there are design style guides that guide you in when and how to use colors, fonts, etc.
  - there are code style guides that guide you in when and whether to:
    - use semi-colons
    - use var, let, or const, and in what circumstances
    - name variables in a certain way, with a certain case
    - etc.
- parameterized routing (see examples folder)
  - views should set up their own event listeners to listen to the data they use
  - set up listeners and fetch data in the view's initialize function
  - the initialize function will receive anything you pass into the constructor call - that would be a good place to pass along the url parameter (like the post id)
- Agile
  - project management style popular in software development
  - based on the idea that everything changes, so we should be prepared for change
  - build software in small, incremental pieces
  - break down a project into the smallest possible features that are 'releasable' and work on a feature at a time.
    - features are written as "stories"
      - user story: 'as a <Type of user> i need to <do something> so that i can <desired outcome>'
      - bug story: some existing feature has a bug that needs fixing
      - developer story: if some code needs to be implemented (like chores) that aren't really a feature that the user interacts with
  - scrum
    - break a project into "sprints" or smaller segments of time during which you focus on particular features
    - stories move through phases within a sprint:
      - 'backlog' (stories that are waiting to be done in a future sprint)
      - 'ready' (stories that are part of this sprint and need to be started)
      - 'in progress' (stories someone is working on actively)
      - 'in testing' (stories that are 'complete' but waiting for approval from team/testers etc)
      - 'complete'
    - daily standup - a SHORT meeting (no one ever even sits down) in which you describe:
      - what you did
      - what you plan to do
      - what, if anything, is blocking you
    - make estimates for a story - how long will it take you to complete it?

## Resources
- [extreme programming](http://extremeprogramming.org)
