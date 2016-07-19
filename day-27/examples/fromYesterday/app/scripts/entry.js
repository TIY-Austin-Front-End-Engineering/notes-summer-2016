import $ from 'jquery';
import Backbone from 'backbone';

import settings from './settings';
import router from './router';
import session from './models/username';

// $(window).on('hashchange', router);

// router();

$(document).ajaxSend(function(evt, xhrAjax, jqueryAjax) {
  console.log('intercepted');
  if (session.get('authtoken')) {
    xhrAjax.setRequestHeader('Authorization', 'Kinvey ' + session.get('authtoken'));
  } else {
    xhrAjax.setRequestHeader('Authorization', 'Basic ' + settings.basicAuth);

  }
  console.log('ajax send function ', arguments);
});

Backbone.history.start();

if (!session.username) {
  router.navigate('login', {trigger: true});
}

console.log(settings);
