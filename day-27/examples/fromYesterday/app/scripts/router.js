import $ from 'jquery';
import Backbone from 'backbone';

import renderPostForm from './views/post-form';
import $login from './views/login';
import LoginView from './views/loginView';
import $signup from './views/signup';
import $nav from './views/nav';
import renderPosts from './views/post-list';
import PostsView from './views/postsView';
import renderPost from './views/post';
import Post from './models/post';
import PostDetailView from './views/postDetailView';
import postsCollection from './collections/posts';
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

    // ask teh posts collection if it has this model already, and use that if so.
    // let post;
    // if (postsCollection.get(id)) {
    //   post = postsCollection.get(id);
    // } else {
    //   // if not i'll make sure to add it to the collection
    //   post = new Post({
    //     _id: id
    //   });
    //   postsCollection.add(post);
    //   post.fetch();
    // }

    // one option is to render in the success of a fetch():
    // post.fetch({success: function() {
    //   let $post = renderPost(post);
    //   $('.container').empty().append($nav).append($post);
    // }});

    // another option is to listen to the model for changes
    // prefer this method, because it will continue to work any time the post is changed by the 'set' method
    // let $postList = renderPosts(postsCollection);
    // let $post = renderPost(post);
    // $('.container').empty()
    //   .append($nav)
    //   .append($postList)
    //   .append($post);
    // post.on('change', function(model) {
    //   let $postList = renderPosts(postsCollection);
    //   let $post = renderPost(model);
    //   if (location.hash === '#posts/' + id) {
    //     $('.container').empty()
    //       .append($nav)
    //       .append($postList)
    //       .append($post);
    //   }
    // });
  },
  newPostFunction: function() {
    var $newPost = renderPostForm();
    $('.container').empty().append($nav).append($newPost);
  }
});

const router = new Router();

export default router;
