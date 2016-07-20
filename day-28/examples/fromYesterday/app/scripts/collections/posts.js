import Backbone from 'backbone';
import Post from '../models/post';
import settings from '../settings';

const Posts = Backbone.Collection.extend({
  comparator: function(model) {
    return model.get('timestamp');
  },
  model: Post,
  url: `https://baas.kinvey.com/appdata/${settings.appId}/blogPosts`
});

let postsCollection = new Posts();

export default postsCollection;
