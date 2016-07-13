import $ from 'jquery';
import Backbone from 'backbone';

import renderPostForm from './views/post-form';
import $login from './views/login';
import $nav from './views/nav';
import renderPosts from './views/post-list';
import $post from './views/post';

// const Router = _.extend(Backbone.Router, {})
const Router = Backbone.Router.extend({
  // key in the routes object is the path of the url
  // value is a string that is the name of the function to call when we go to that route.
  routes: {
    login       : 'loginFunction',
    posts       : 'postsFunction',
    'posts/new': 'newPostFunction',
    'posts/:id' : 'postFunction'
  },
  loginFunction: function() {
    $('.container').empty().append($login);
  },
  postsFunction: function() {
    renderPosts();
  },
  postFunction: function(id) {
    console.log(id);
    $('.container').empty().append($nav).append($post);
  },
  newPostFunction: function() {
    var $newPost = renderPostForm();
    $('.container').empty().append($nav).append($newPost);
  }
});

const router = new Router();

export default router;
