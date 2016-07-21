import Backbone from 'backbone';
import $ from 'jquery';
import BlogPost from './views/blogPost';
import BlogPostEdit from './views/blogPostEdit';

var Router = Backbone.Router.extend({
  routes: {
    'posts/:postId': 'post',
    'posts/:postId/edit': 'postEdit'
  },
  post: function(postId) {
    let blogPost = new BlogPost(postId);
    $('.container').html(blogPost.render().$el);
  },
  postEdit: function(postId) {
    let blogPostEdit = new BlogPostEdit(postId);
    $('.container').html(blogPostEdit.render().$el);
  }
});

export default new Router();
