import ReactDOM from 'react-dom';
import $ from 'jquery';
import router from './router';
import settings from './settings';

// $(document).ajaxSend(function(evt, xhr, jquerySettings) {
//   xhr.setRequestHeader('Authorization', settings.basicAuth)
// })

ReactDOM.render(router, document.getElementById('container'))

function wait5secs() {
  console.log('initiating waiting');
  var promise = new Promise((resolve, reject) => {
    window.setTimeout(resolve, 2000);
  });
  return promise;
}

wait5secs()
.then(function() {
  return $.ajax('https://api.github.com/users/nicerhugs')
})
.then(function(githubStuff) {
  console.log(githubStuff);
})

function getCategories() {
  var promise = new Promise(function(resolve, reject) {
    $.ajax('http://jservice.io/api/categories', {
      data: {
        count: 6,
        offset: Math.floor(Math.random()*2000)
      },
      success: resolve,
      error: reject
    })
  });
  return promise;
}

function getCategoriesWithQuestions(categories) {
  let ids = categories.map((category)=>{return category.id})
  console.log(ids);
  ids.forEach(function(id) {
    $.ajax('http://jservice.io/api/category', {
      data: {id: id},
      success: function(data) {
        console.log(data);
      }
    })
  })
}

getCategories()
.then(getCategoriesWithQuestions)
