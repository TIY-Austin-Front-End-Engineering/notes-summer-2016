import $ from 'jquery';
import Backbone from 'backbone';

import renderPostForm from './views/post-form';
import LoginView from './views/loginView';
import $signup from './views/signup';
import $nav from './views/nav';
import PostsView from './views/postsView';
import PostDetailView from './views/postDetailView';
import user from './models/username';
import settings from './settings';

// const Router = _.extend(Backbone.Router, {})
const Router = Backbone.Router.extend({
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
    // var self = this;
    user.save(null, {
      url: `https://baas.kinvey.com/user/${settings.appId}/_logout`,
      success: () => {
        user.clear();
        this.navigate('login', {trigger: true});
      }
    });
  },
  postsFunction: function() {
    let posts = new PostsView();
    $('.container').empty().append($nav).append(posts.render().$el);
  },
  postFunction: function(id) {
    let post = new PostDetailView(id);
    let posts = new PostsView();
    $('.container').empty()
      .append($nav)
      .append(posts.render().$el)
      .append(post.render().$el);
  },
  newPostFunction: function() {
    var $newPost = renderPostForm();
    $('.container').empty().append($nav).append($newPost);
  }
});

const router = new Router();

export default router;
