import $ from 'jquery';
import Backbone from 'backbone';

import router from './router';
import session from './models/username';

// $(window).on('hashchange', router);

// router();

Backbone.history.start();

if (!session.username) {
  router.navigate('login', {trigger: true});
}
