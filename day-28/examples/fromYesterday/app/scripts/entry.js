import $ from 'jquery';
import Backbone from 'backbone';

import settings from './settings';
import router from './router';
import session from './models/username';

// $(window).on('hashchange', router);

// router();

$(document).ajaxSend(function(evt, xhrAjax, jqueryAjax) {
  console.log('intercepted');
  if (localStorage.getItem('authtoken')) {
    xhrAjax.setRequestHeader('Authorization', 'Kinvey ' + localStorage.getItem('authtoken'));
  } else {
    xhrAjax.setRequestHeader('Authorization', 'Basic ' + settings.basicAuth);
  }
  console.log('ajax send function ', arguments);
});

Backbone.history.start();

console.log(settings);
