import Backbone from 'backbone';

const Post = Backbone.Model.extend({
  urlRoot: 'https://tiny-za-server.herokuapp.com/collections/blogPosts', 
  defaults: {
    timestamp: new Date()
  }
});

export default Post;
