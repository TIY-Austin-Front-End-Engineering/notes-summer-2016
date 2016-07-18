import Backbone from 'backbone';

const Post = Backbone.Model.extend({
  idAttribute: '_id',
  urlRoot: 'https://tiny-za-server.herokuapp.com/collections/blogPosts',
  defaults: {
    timestamp: new Date(),
    likes: 0
  },
  like: function like() {
    var newLikes = this.get('likes') + 1;
    this.set('likes', newLikes);
    this.save();
  }
});

export default Post;
