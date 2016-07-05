[Table of Contents](/README.md)

# Day 17 - JSON, AJAX intro

## Review
- `querySelectorAll('selector')` vs `$('selector')`
  - jquery version returns a jquery wrapped elements
  - the primary benefit is not having to loop to apply changes to multiple elements at once
  - easier traversing the DOM

    ```js
    //vanilla
    var divs = document.querySelectorAll('div');
    for (var i = 0; i < divs.length; i++) {
      divs[i].classList.add('coolDiv');
    }
    //jqeury
    $('div').addClass('coolDiv');
    var newDiv = $('<div></div>') // making a new div
    ```



## Challenge
write a function `names()` which takes a string of comma-separated names (first and last) and then returns an object where each first name is a key, and each last name is a value

```js
names("George Washington, John Adams, Kanye West")
  //  {
  //     George: "Washington",
  //     John: "Adams",
  //     Kanye: "West"
  //   }
```

## Notes
- AJAX - asychronous javascript and xml
  - 4 verbs - CRUD
    - create, read, update, delete
    - HTTP verb counterparts: POST, GET, PUT, DELETE
  - to make an ajax request: `$.ajax(settings)`
    - where `settings` is an object that configures the ajax request
    ```js
    // example settings object:
    var requestSettings = {
      url: 'the url where i want to make the request to',
      type: 'GET' // either 'GET', 'PUT', 'POST', 'DELETE',
      success: function(response) {
        // what to do when the data returns from the server successfully
        // this callback always receives the response from the server as its first argument
      }
    }
    ```
      - `'jsonp'`
        - always set the `dataType` to `'jsonp'` when `crossorigin` requests are an issue. you will need this for tonight's homework.
    - see below for link to settings documentation
- API - application interface
  - usually refers to the way i can interface / interact with a an applications data
  - many web applications make their data publicly available through a JSON API
- JSON - JavaScript Object Notation
  - a way of passing data around the internet, using JS objects and arrays.
  - JUST LIKE JS objects! except:
    - keys are always in double quotes
    - JSON does NOT ALLOW trailing commas
    ```js
    //js
    {
      name: 'Jess Scheuring',
      age: 32,
    }
    // json
    {
      "name": "Jess Scheuring",
      "age": 32
    }
    ```

## Resources
- [The Event Loop video](https://www.youtube.com/watch?v=8aGhZQkoFbQ) (until minute 17)
- [jQuery ajax settings configuration](http://api.jquery.com/jquery.ajax/#jQuery-ajax-settings)
