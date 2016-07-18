import Backbone from 'backbone';
import settings from '../settings';

const Post = Backbone.Model.extend({
  idAttribute: '_id',
  urlRoot: `https://baas.kinvey.com/appdata/${settings.appId}/blogPosts`,
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

window.Post = Post;
export default Post;
