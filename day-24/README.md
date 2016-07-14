[Table of Contents](/README.md)

# Day 24 - Backbone Collections and Events

## Review

## Challenge

## Notes
- Router responsibilities
  - keeps track of which route or 'page' a user wants to see
  - calls the different render functions and hooks them up with the models/collections that back them
- Model responsibilities
  - keeping track of a particular piece of data
  - should have custom functionality should data on it need to be manipulated
  - emits events when that data changes or when it is created or destroyed
  - can also be responsible for synching with the server, but more likely its collection will do that for it
- Collection responsibilities
  - houses a bunch of models
  - keeps track of those models and any changes to them, emitting events when changes occur (adding, removing, updating)
  - synching with the server (`.fetch()`)
- View or render function responsibilities
  - render itself and return itself
  - render and populate itself with its children
  - listen to its own data source and update itself when the data changes
  - listen to user events and pass along info as needed
- `someCollection.create()` like making a new model, saving that model to the server, AND adding it to the collection all at once
- by listening to events emitted by models and collections, views can update 'automatically' by re-rendering when the data they are representing changes.

## Resources
