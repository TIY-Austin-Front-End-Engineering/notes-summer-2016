import $ from 'jquery';
import Backbone from 'backbone';

import renderPostForm from './views/post-form';
import LoginView from './views/loginView';
import $signup from './views/signup';
import $nav from './views/nav';
import PostsView from './views/postsView';
import PostDetailView from './views/postDetailView';
import user from './models/username';
import postsCollection from './collections/posts';
import settings from './settings';

// const Router = _.extend(Backbone.Router, {})
const Router = Backbone.Router.extend({
  initialize: function() {
    this.on('route', function() {
      this.oldViews.forEach(function(view) {
        view.destroy();
      });
      this.currentViews.forEach(function(view) {
        this.oldViews.push(view)
        this.currentViews.unshift();
      })
    })
  },
  currentViews: [],
  oldViews: [],
  // key in the routes object is the path of the url
  // value is a string that is the name of the function to call when we go to that route.
  routes: {
    login       : 'loginFunction',
    signup      : 'signupFunction',
    logout      : 'logoutFunction',
    posts       : 'postsFunction',
    'posts/new': 'newPostFunction',
    'posts/:id' : 'postFunction',
    '/*'        : 'loginFunction'
  },
  loginFunction: function() {
    let login = new LoginView();

    login.render();
    $('.container').empty().append(login.$el);
  },
  signupFunction: function() {
    $('.container').empty().append($signup);
  },
  logoutFunction: function() {
    user.save(null, {
      url: `https://baas.kinvey.com/user/${settings.appId}/_logout`,
      success: () => {
        user.clear();
        this.navigate('login', {trigger: true});
      }
    });
  },
  postsFunction: function() {
    console.log('posts route');
    let postsView = new PostsView();
    $('.container').empty().append($nav).append(postsView.render().$el);
  },
  postFunction: function(id) {
    postsCollection.off();
    let postDetailView = new PostDetailView(id);
    let postsView = new PostsView();
    $('.container').empty()
      .append($nav)
      .append(postsView.render().$el)
      .append(postDetailView.render().$el);
  },
  newPostFunction: function() {
    console.log(user);
    if (!user.get('username')) {
      if (localStorage.getItem('authtoken')) {
        user.retrieve();
        // try to get the user info
      } else {
        router.navigate('login', {trigger: true});
      }
    } else {
      var $newPost = renderPostForm();
      $('.container').empty().append($nav).append($newPost);
    }
  }
});

const router = new Router();

export default router;
